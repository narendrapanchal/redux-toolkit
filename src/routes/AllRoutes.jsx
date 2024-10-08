import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from '../pages/HomeRoute';
import Home from '../pages/Home';
import ProductWrapper from '../pages/ProductWrapper';


const fetchData= async(url)=>{
    const response=await fetch(url);
    return await response.json();
}

import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/login/Login';
import { SignUp } from '../pages/login/SignUp';

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
                element: <Blogs />,
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