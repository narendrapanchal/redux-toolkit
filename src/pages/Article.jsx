import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../routes/AllRoutes";

function Article() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setData(response);
    })();
  }, [id]);

  return (
    <div className="shadow-lg my-4 p-2  rounded container">
      <h1 className="font-bold text-3xl text-left my-2">{data?.title}</h1>
      <p className="text-left mb-2">{data?.body}</p>
    </div>
  );
}

export default Article;
