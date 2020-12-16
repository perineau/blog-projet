import axios from "axios";
import { TOKEN } from "../config.json";

const axiosInstanceConnect = axios.create({
  baseURL: "https://supdevinci.nine1000.tech/",

  headers: { "x-token": TOKEN },
});

const axiosInstance = axios.create({
  baseURL: "https://supdevinci.nine1000.tech/",
});

const getUserName = async (author) => {
  return await axiosInstance
    .get(`/authors/${author}`)
    .then((author) => author.data.display_name);
};

export const getPosts = async (index = 0, number = 10) => {
  return await axiosInstance
    .get("/posts", {
      params: {
        limit: number,
        offset: index * number,
      },
    })
    .then((posts) => posts.data.result);
};

export const getPost = async (id) => {
  return await axiosInstance.get(`/posts/${id}`).then((post) => post.data);
};
export const getComments = async (id) => {
  return await axiosInstance.get(`/posts/${id}/comments`).then((comments) => {
    return Promise.all(
      comments.data.result.map(async (comment) => ({
        id: comment.id,
        author: await getUserName(comment.author),
        content: comment.content,
        created_at: comment.created_at,
      }))
    );
  });
};

export const addComment = async (idPost, comment) => {
  return await axiosInstanceConnect
    .post(`/posts/${idPost}/comments`, { content: comment })
    .then(async (comment) => ({
      id: comment.data.id,
      author: await getUserName(comment.data.author),
      content: comment.data.content,
      created_at: comment.data.created_at,
    }));
};
