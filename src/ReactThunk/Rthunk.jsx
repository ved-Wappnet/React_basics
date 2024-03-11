import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "./features/postslice";

const Rthunk = () => {
  const { posts, loading } = useSelector((state) => state.post);
  const [newPostData, setNewPostData] = useState({
    title: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(newPostData));
    setNewPostData({ title: "" });
  };

  const handleUpdate = (postId, updatedData) => {
    dispatch(updatePost({ id: postId, ...updatedData }));
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  if (loading) {
    return <h2>Loading .....</h2>;
  }

  return (
    <div>
      <div className="w-96 gap-4 h-24 flex px-4 py-7">
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={newPostData.title}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-red-500 text-white px-3 py-3 rounded flex justify-center items-center"
        >
          Post
        </button>
      </div>
      <div>
        {posts.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center gap-4 mb-4"
          >
            <h2 className="font-medium">{item.title}</h2>
            <div className="flex gap-2">

              <button
                onClick={() => {
                  const newTitle = prompt("Enter new title:");
                  if (newTitle !== null) {
                    handleUpdate(item.id, { title: newTitle });
                  }
                }}
                className="bg-blue-500 text-white px-3 py-2 rounded mr-2"
                style={{ cursor: "pointer" }}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-2 rounded"
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rthunk;
