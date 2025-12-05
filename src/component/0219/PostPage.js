import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PostPage=()=>{
  const location = useLocation();
  const navigate = useNavigate();

  const post = location.state?.post;

  if(!post){
    return <p>データがありません</p>
  }

  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  )
}

export default PostPage