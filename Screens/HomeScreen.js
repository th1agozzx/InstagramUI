import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Keyboard, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { mockPosts, mockUsers } from '../data/mockData';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
  const [expandedComments, setExpandedComments] = useState([]);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const updatedLikes = post.liked ? post.likes - 1 : post.likes + 1;
        return { ...post, likes: updatedLikes, liked: !post.liked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleComment = () => {
    if (!commentText.trim()) return;

    const updatedPosts = posts.map(post => {
      if (post.id === activePostId) {
        return { ...post, comments: [...post.comments, commentText.trim()] };
      }
      return post;
    });
    setPosts(updatedPosts);
    setCommentText('');
    setActivePostId(null);
    Keyboard.dismiss();
  };

  const toggleComments = (postId) => {
    if (expandedComments.includes(postId)) {
      setExpandedComments(expandedComments.filter(id => id !== postId));
    } else {
      setExpandedComments([...expandedComments, postId]);
    }
  };

  const handleTextInputSubmit = () => {
    if (!commentText.trim()) return;

    handleComment();
  };

  const renderItem = ({ item }) => {
    const user = mockUsers[item.author];
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image source={user.avatarUrl} style={styles.avatar} />
          <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { user })}>
            <Text style={styles.author}>{item.author}</Text>
          </TouchableOpacity>
        </View>

        <Image source={item.imageUrl} style={styles.postImage} />
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <FontAwesome name="heart" size={24} color={item.liked ? 'red' : 'black'} style={styles.icon} />
          </TouchableOpacity>
          <Text>{item.likes}</Text>
          <TouchableOpacity onPress={() => setActivePostId(item.id)}>
            <FontAwesome name="comment" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <Text>{item.comments.length}</Text>
        </View>
        {activePostId === item.id && (
          <View style={styles.commentContainer}>
            <TextInput
              style={styles.commentInput}
              placeholder="Adicione um comentário..."
              value={commentText}
              onChangeText={setCommentText}
              onSubmitEditing={handleTextInputSubmit}
            />
          </View>
        )}
        <TouchableOpacity onPress={() => toggleComments(item.id)}>
          <Text style={styles.viewComments}>{expandedComments.includes(item.id) ? 'Comentários' : 'Ver os Comentários'}</Text>
        </TouchableOpacity>
        {expandedComments.includes(item.id) && (
          <View style={styles.commentContainer}>
            {item.comments.map((comment, index) => (
              <Text key={index} style={styles.comment}>{comment}</Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.feed}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feed: {
    flex: 1,
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginRight: 25,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  commentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  commentInput: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  viewComments: {
    color: '#888',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  comment: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
});
