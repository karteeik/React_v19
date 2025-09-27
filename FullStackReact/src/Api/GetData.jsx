import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getCrudData = () => {
  return api.get("posts");
};

export const deletePost = (id) => {
  return api.delete(`posts/${id}`)
}

export const postsData = (post) => {
  return api.post("/posts", post);
}