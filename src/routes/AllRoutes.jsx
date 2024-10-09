import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomeRoute from '../pages/HomeRoute';
import Home from '../pages/Home';
import ProductWrapper from '../pages/ProductWrapper';
import Blogs from '../pages/Blogs';
import Article from '../pages/Article';
import Login from '../pages/login/Login';
import { SignUp } from '../pages/login/SignUp';
import Authentication from '../components/HOC/Authentication';
import HasAuth from '../components/HOC/HasAuth';
import Cart from '../pages/Cart';


export const fetchData= async(url)=>{
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
                        element: <ProductList />
                    },
                    {
                        path: ":id",
                        element: <Product />,

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

                    }
                    ,
                    {
                        path:'article/:id',
                        element:<Article/>,
                        
                    }
                ]
            },
            {
                path: "/cart",
                element: <><Cart /></>
            },
            {
                path: "/login",
                element:<HasAuth><Login /></HasAuth>
            },
            {
                path: "/signup",
                element:<HasAuth><SignUp /></HasAuth>
            }
        ],
    },
]);

const AllRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AllRoutes;