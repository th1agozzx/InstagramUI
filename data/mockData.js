import neymarjrImage from '../assets/image/neymarjr.png';
import ochicoinImage from '../assets/image/ochicoin.png';
import casimiroImage from '../assets/image/casimiro.png';
import neymarPost from '../assets/image/neymar.png';
import ochicoinPost from '../assets/image/chicomoedas.png';
import casimiroPost from '../assets/image/casémito.png';

export const mockPosts = [
  { id: '1', author: 'neymarjr', imageUrl: neymarPost, likes: 5, comments: ['Legal!'], liked: false },
  { id: '2', author: 'ochicoin', imageUrl: ochicoinPost, likes: 10, comments: ['Gostei!'], liked: false },
  { id: '3', author: 'casimiro', imageUrl: casimiroPost, likes: 15, comments: ['Maravilhoso!'], liked: false },
];

export const mockUsers = {
  'neymarjr': { name: 'neymarjr', bio: 'Bio of neymarjr', avatarUrl: neymarjrImage, posts: [mockPosts[0]] },
  'ochicoin': { name: 'ochicoin', bio: 'Bio of ochicoin', avatarUrl: ochicoinImage, posts: [mockPosts[1]] },
  'casimiro': { name: 'casimiro', bio: 'Bio of casimiro', avatarUrl: casimiroImage, posts: [mockPosts[2]] },
};
