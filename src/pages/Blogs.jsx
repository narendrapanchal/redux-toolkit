import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { fetchPosts } from "../routes/AllRoutes";

const Blogs = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetchPosts(10, +id);
      setData(response);
    })();
  }, [id]);
  return (
    <div className="container">
      {data?.data?.length > 0 &&
        data?.data?.map((blog) => <BlogCard {...blog} key={blog.id} />)}
      <div className="p-2 gap-1 flex justify-center">
        {new Array(data.pages).fill(0).map((_, ind) => (
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
