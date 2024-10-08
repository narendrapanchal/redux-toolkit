import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from '../pages/HomeRoute';
import Home from '../pages/Home';
import ProductWrapper from '../pages/ProductWrapper';
const fetchData= async(url)=>{
    console.log(url)
    const response=await fetch(url);
    return await response.json();
}
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
        ],
    },
]);

const AllRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AllRoutes;