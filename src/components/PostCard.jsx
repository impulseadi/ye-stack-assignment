import { Link } from "react-router-dom";

const PostCard = ({ post, showEditLink }) => (
  <div className="border p-4 mb-4 relative">
    {/* Edit Post Button in the top-left corner */}
    {showEditLink && (
      <Link
        to={`/edit-post/${post.id}`}
        className="absolute right-5  px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition-colors"
      >
        Edit Post
      </Link>
    )}

    <h3 className="font-bold">{post.title}</h3>
    <p>{post.body.slice(0, 100)}...</p>
    
    {/* Read More Button */}
    <Link
      to={`/post/${post.id}`}
      className="text-blue-500 mt-2 block"
    >
      Read More
    </Link>
  </div>
);

export default PostCard;
