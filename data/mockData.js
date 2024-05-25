import neymarjrImage from "../assets/image/neymarjr.png";
import ochicoinImage from "../assets/image/ochicoin.png";
import casimiroImage from "../assets/image/casimiro.png";
import neymarPost from "../assets/image/neymar.png";
import ochicoinPost from "../assets/image/chicomoedas.png";
import casimiroPost from "../assets/image/casémito.png";
import neymarPost2 from "../assets/image/neymar2.png";
import ochicoinPost2 from "../assets/image/chicomoedas2.png";
import casimiroPost2 from "../assets/image/casémito2.png";

export const mockPosts = [
  {
    id: "1",
    author: "neymarjr",
    imageUrl: neymarPost,
    likes: 5,
    comments: ["Legal!"],
    liked: false,
  },
  {
    id: "2",
    author: "ochicoin",
    imageUrl: ochicoinPost,
    likes: 10,
    comments: ["Gostei!"],
    liked: false,
  },
  {
    id: "3",
    author: "casimiro",
    imageUrl: casimiroPost,
    likes: 15,
    comments: ["Maravilhoso!"],
    liked: false,
  },
  {
    id: "4",
    author: "neymarjr",
    imageUrl: neymarPost2,
    likes: 20,
    comments: ["Top!"],
    liked: false,
  },
  {
    id: "5",
    author: "ochicoin",
    imageUrl: ochicoinPost2,
    likes: 25,
    comments: ["Muito bom!"],
    liked: false,
  },
  {
    id: "6",
    author: "casimiro",
    imageUrl: casimiroPost2,
    likes: 30,
    comments: ["Sensacional!"],
    liked: false,
  },
];

export const mockUsers = {
  neymarjr: {
    name: "neymarjr",
    bio: "⚽️ Astro do futebol e ícone global. Driblando desafios dentro e fora dos campos. Bem-vindo ao meu mundo!",
    avatarUrl: neymarjrImage,
    posts: [mockPosts[0], mockPosts[3]],
  },
  ochicoin: {
    name: "ochicoin",
    bio: "🚀 Explorador do universo cripto. Decifrando o futuro das finanças, uma moeda digital por vez.",
    avatarUrl: ochicoinImage,
    posts: [mockPosts[1], mockPosts[4]],
  },
  casimiro: {
    name: "casimiro",
    bio: "🎥 Rei das lives e contador de histórias. Venha rir e se divertir com minhas aventuras diárias!",
    avatarUrl: casimiroImage,
    posts: [mockPosts[2], mockPosts[5]],
  },
};
