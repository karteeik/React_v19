import { useEffect, useState } from "react";
import { postsData } from "../../Api/GetData";

export const FormSec = ({ card, getCard, updatePost, setUpdatePost }) => {
  const [postData, addPostData] = useState({
    title: "",
    body: "",
  });

  // Prefill form when editing
  useEffect(() => {
    if (updatePost?.id) {
      addPostData({
        title: updatePost.title || "",
        body: updatePost.body || "",
      });
    }
  }, [updatePost]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    addPostData((prev) => ({ ...prev, [name]: value }));
  };

  const addCurrentPostData = async () => {
    if (updatePost?.id) {
      const updatedList = card.map((item) =>
        item.id === updatePost.id ? { ...item, ...postData } : item
      );
      getCard(updatedList);
      setUpdatePost({});
    } else {
      // ➕ Add new post
      const res = await postsData(postData);
      if (res.status === 201) {
        getCard([...card, res.data]);
      }
    }

    // reset form
    addPostData({ title: "", body: "" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCurrentPostData();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-center m-5 gap-10 "
    >
      <input
        type="text"
        placeholder="Add title"
        name="title"
        className="p-2 text-2xl border-4 rounded-lg"
        onChange={handleInputChange}
        value={postData.title}
      />
      <input
        type="text"
        placeholder="Add Post"
        name="body"
        className="p-2 text-2xl border-4 rounded-lg"
        onChange={handleInputChange}
        value={postData.body}
      />
      <button className="cursor-pointer bg-green-800 px-8 rounded-2xl text-white">
        {updatePost?.id ? "Update" : "Add"}
      </button>
    </form>
  );
};
