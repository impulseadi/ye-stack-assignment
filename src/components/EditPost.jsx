import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();  
  const navigate = useNavigate();  

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
   
    const posts = JSON.parse(localStorage.getItem("newPosts")) || [];
    const post = posts.find((post) => post.id === parseInt(postId));  // Finding the  post by postId

    if (post) {
      setTitle(post.title);
      setBody(post.body);
    } else {
      // If post is not found, navigate to home page (or show an error message)
      navigate("/", { replace: true });  // Using { replace: true } to replace the history state
    }
  }, [postId, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem("newPosts")) || [];
    
    // Update the post with the new title and body
    const updatedPosts = posts.map((post) =>
      post.id === parseInt(postId) ? { ...post, title, body } : post
    );

    // Save the updated posts back to localStorage
    localStorage.setItem("newPosts", JSON.stringify(updatedPosts));

    // Navigate to the post details page to view the updated post
    // After updating, navigate back to home page
    navigate("/", { replace: true });  
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <h2 className="font-bold text-xl mb-4">Edit Post</h2>

      <input
        type="text"
        placeholder="Title"
        className="p-2 mb-4 w-full border border-gray-300 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Body"
        className="p-2 mb-4 w-full border border-gray-300 rounded-md"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
        Save Changes
      </button>
    </form>
  );
};

export default EditPost;
