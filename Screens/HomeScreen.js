import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, TextInput, Keyboard, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Dados de posts
const mockPosts = [
  { id: '1', author: 'User1', imageUrl: 'https://th.bing.com/th/id/OIP.VKdiYSnRcOJNgMg3b2iK2gHaE8?rs=1&pid=ImgDetMain', likes: 5, comments: ['Legal!'], liked: false },
  { id: '2', author: 'User2', imageUrl: 'https://via.placeholder.com/150', likes: 10, comments: ['Gostei!'], liked: false },
  { id: '3', author: 'User3', imageUrl: 'https://via.placeholder.com/150', likes: 15, comments: ['Maravilhoso!'], liked: false },
];

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [activePostId, setActivePostId] = useState(null);
  const [expandedComments, setExpandedComments] = useState([]);

  // Inicializa os posts com os dados
  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  // Monitora a visibilidade do teclado
  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  // Função para curtir/descurtir
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

  // Função para adicionar um comentário
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

  // Alterna a visualização dos comentários
  const toggleComments = (postId) => {
    if (expandedComments.includes(postId)) {
      setExpandedComments(expandedComments.filter(id => id !== postId));
    } else {
      setExpandedComments([...expandedComments, postId]);
    }
  };

  // Função para lidar com a submissão do campo de texto
  const handleTextInputSubmit = () => {
    if (!commentText.trim()) return;

    handleComment();
  };

  // Renderização FlatList
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
        <Text style={styles.author}>{item.author}</Text>
      </View>
      
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleLike(item.id)}>
          <FontAwesome name="heart" size={24} color={item.liked ? "red" : "black"} style={styles.icon} />
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
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
}

// Estilos
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
});
