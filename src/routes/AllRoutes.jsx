import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from '../pages/HomeRoute';
import Home from '../pages/Home';
import ProductWrapper from '../pages/ProductWrapper';

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
        ],
    },
]);

const AllRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default AllRoutes;