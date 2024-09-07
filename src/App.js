import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostProvider } from "./HomeContext";
import PostList from "./PostList";
import PostDetails from "./PostDetails";

function App() {
  return (
    <PostProvider>
    <Router>
        <div className="content">
        <Routes>
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
        </div>
    </Router>
    </PostProvider>
  );
}

export default App;
