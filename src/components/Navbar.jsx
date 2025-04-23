import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gradient-to-r from-green-500 via-teal-600 to-green-700 text-white p-6 shadow-lg">
    <div className="flex justify-between items-center">
      <div className="text-2xl font-semibold">Ye Stack</div>
      <div>
        <Link
          to="/"
          className="text-lg mr-6 px-4 py-2 border border-gradient-to-r from-black via-gray-800 to-black rounded-md hover:text-black transition-all duration-300"
        >
          Home
        </Link>
        <Link
          to="/add-post"
          className="text-lg mr-6 px-4 py-2 border border-gradient-to-r from-black via-gray-800 to-black rounded-md hover:text-black transition-all duration-300"
        >
          Add Post
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
