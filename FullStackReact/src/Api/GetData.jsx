import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// read
export const getCrudData = () => {
  return api.get("posts");
};

// delete
export const deletePost = (id) => {
  return api.delete(`posts/${id}`);
};

// create
export const postsData = (post) => {
  return api.post("/posts", post);
};

// update
// export const updateData = (id, post) => {
//   return api.put(`/posts/${id}`, post);
// };
