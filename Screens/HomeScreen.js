import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Keyboard, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const mockPosts = [
  { id: '1', author: 'User1', imageUrl: 'https://via.placeholder.com/150', likes: 5, comments: ['Legal!'] },
  { id: '2', author: 'User2', imageUrl: 'https://via.placeholder.com/150', likes: 10, comments: ['Gostei!'] },
  { id: '3', author: 'User3', imageUrl: 'https://via.placeholder.com/150', likes: 15, comments: ['Maravilhoso!'] },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
  const [expandedComments, setExpandedComments] = useState([]);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
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

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
        <Text style={styles.author}>{item.author}</Text>
      </View>
      
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleLike(item.id)}>
          <FontAwesome name="heart" size={24} color="black" style={styles.icon} />
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
            onSubmitEditing={handleTextInputSubmit} // Chama a função handleComment quando a tecla Enter é pressionada
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.feed}>
      <Image 
          style={styles.logo}
          source={require('../assets/image/LogoInstagram.png')}
        />
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logo: {
    height: 68,
    width: 220,
    borderRadius: 10,
    backgroundColor: 'black',
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
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  viewComments: {
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  comment: {
    marginBottom: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 5,
  },
});
