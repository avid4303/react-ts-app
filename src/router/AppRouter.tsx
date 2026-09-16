import { Routes, Route } from "react-router-dom";

import Post from "../page/Post";
import PostList from "../compornents/posts/PostsList";
import PostDetailPage from "../page/PostDetailPage";
import Notice from "../page/Notice";

export default function AppRouter(){
  return(
    <Routes>
      <Route path="/" element={<Post />}>
        <Route index element={<PostList />}></Route>
        <Route path="/PostDetailPage/:id" element={<PostDetailPage />}></Route>
        <Route path="/Notice" element={<Notice />}></Route>
      </Route>
    </Routes>
  )
};