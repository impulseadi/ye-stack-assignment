import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost"; // Add EditPost route

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostDetails />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/edit-post/:postId" element={<EditPost />} /> {/* Add EditPost Route */}
    </Routes>
  </Router>
);

export default App;
