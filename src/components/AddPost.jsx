import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, body };
    const newPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
    newPosts.unshift(newPost);
    localStorage.setItem("newPosts", JSON.stringify(newPosts));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border border-gray-300 rounded-md">
      <input
        type="text"
        placeholder="Title"
        className="p-2 mb-4 w-full border border-gray-300 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        className="p-2 mb-4 w-full border border-gray-300 rounded-md "
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 cursor-pointer">
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
