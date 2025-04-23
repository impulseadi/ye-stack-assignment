
import { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body, id: Date.now() };
    onSubmit(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <input
        type="text"
        placeholder="Title"
        className="p-2 mb-4 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        className="p-2 mb-4 w-full"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Post</button>
    </form>
  );
};

export default PostForm;
