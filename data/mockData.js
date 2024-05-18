export const mockPosts = [
    { id: '1', author: 'neymarjr', imageUrl: 'https://i.pinimg.com/564x/e0/84/8a/e0848a6a461a9cf003ce2ad721932a2d.jpg', likes: 5, comments: ['Legal!'], liked: false },
    { id: '2', author: 'ochicoin', imageUrl: 'https://via.placeholder.com/150', likes: 10, comments: ['Gostei!'], liked: false },
    { id: '3', author: 'casimiro', imageUrl: 'https://via.placeholder.com/150', likes: 15, comments: ['Maravilhoso!'], liked: false },
  ];
  
  export const mockUsers = {
    'neymarjr': { name: 'neymaarjr', bio: 'Bio of neymaarjr', avatarUrl: 'https://i.pinimg.com/564x/e0/84/8a/e0848a6a461a9cf003ce2ad721932a2d.jpg', posts: [mockPosts[0]] },
    'ochicoin': { name: 'ochicoin', bio: 'Bio of ochicoin', avatarUrl: 'https://via.placeholder.com/100', posts: [mockPosts[1]] },
    'casimiro': { name: 'casimiro', bio: 'Bio of casimiro', avatarUrl: 'https://via.placeholder.com/100', posts: [mockPosts[2]] },
  };
  