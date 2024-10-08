import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomeRoute from '../pages/HomeRoute';
import Home from '../pages/Home';
import ProductWrapper from '../pages/ProductWrapper';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import Article from '../pages/Article';
import Login from '../pages/login/Login';
import { SignUp } from '../pages/login/SignUp';


const fetchData= async(url)=>{
    const response=await fetch(url);
    return await response.json();
}


export const fetchPosts = async (limit = 10, page = 1) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      
      return {
        data: data.slice((page - 1) * limit, (page - 1) * limit + limit),
        pages: Math.ceil(data.length / limit),
      };
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeRoute />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: <ProductWrapper />,
                children: [
                    {
                        index: true,
                        element: <ProductList />,
                        loader:()=>fetchData('https://fakestoreapi.com/products')
                    },
                    {
                        path: ":id",
                        element: <Product />,
                        loader: ({params}) => fetchData(`https://fakestoreapi.com/products/${params.id}`)
                    },
                ],
            },
            {
                path: "/blogs",
                element: <Outlet />,
                children:[
                    {
                        path:":id",
                        element:<Blogs />,
                        loader:()=>fetchPosts()
                    }
                    ,
                    {
                        path:'article/:id',
                        element:<Article/>,
                        loader:({params})=>fetchData(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
                    }
                ]
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            }
        ],
    },
]);

const AllRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AllRoutes;