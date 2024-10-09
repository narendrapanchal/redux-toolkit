import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../routes/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { blog, fetchBlogData } from "../store/slicers/blogSlicer";

function Article() {
  const { id } = useParams();
  const dispatch=useDispatch();
  const blogData=useSelector(blog)
  useEffect(() => {
    dispatch(fetchBlogData(`https://jsonplaceholder.typicode.com/posts/${id}`))
  }, [id]);
if(blogData.loading){
  return <div>Loading...</div>
}
  return (
    <div className="shadow-lg my-4 p-2  rounded container">
      <h1 className="font-bold text-3xl text-left my-2">{blogData.blog?.title}</h1>
      <p className="text-left mb-2">{blogData.blog?.body}</p>
    </div>
  );
}

export default Article;
