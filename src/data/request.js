import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://supdevinci.nine1000.tech/",
});

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
