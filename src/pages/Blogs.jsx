import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { fetchPosts } from "../routes/AllRoutes";
import { useDispatch, useSelector } from "react-redux";
import { blog, fetchBlogList } from "../store/slicers/blogSlicer";

const Blogs = () => {
  const data=useSelector(blog);
  const dispatch=useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchBlogList({limit:10,page:id}))
  }, [id]);
  if(data.loading){
    return <div>Loading...</div>
  }
  return (
    <div className="container">
      
      {data?.blog?.data?.length>0&&
        data?.blog?.data.map((blog) => <BlogCard {...blog} key={blog.id} />)}
      <div className="p-2 gap-1 flex justify-center">
        {new Array(data?.blog?.pages).fill(0).map((_, ind) => (
          <Link
            key={"Blog " + (ind + 1)}
            to={"/blogs/" + (+ind + 1)}
            className={`bg-gray-500 text-white rounded-full px-2 ${
              id - 1 == ind ? "bg-green-800" : undefined
            }`}
          >
            {ind + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
