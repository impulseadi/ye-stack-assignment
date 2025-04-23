import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(""); // Use local state for search query

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const apiPosts = data.posts;
        const localPosts = JSON.parse(localStorage.getItem("newPosts")) || [];
        setPosts([...localPosts, ...apiPosts]);
      });
  }, []);

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search input field */}
      <div className="mb-6 max-w-lg ">
        <label
          htmlFor="searchInput"
          className="block text-xl font-semibold mb-2 text-gray-700"
        >
          Search Posts by Title
        </label>
        <div className="flex items-center justify-between">
          <input
            id="searchInput"
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter post title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Display filtered posts */}
      {filteredPosts.map((post) => {
        // Check if the post is locally added (from localStorage)
        const isLocalPost = JSON.parse(localStorage.getItem("newPosts"))?.some(
          (localPost) => localPost.id === post.id
        );

        return (
          <div key={post.id}>
            <PostCard post={post} showEditLink={isLocalPost} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
