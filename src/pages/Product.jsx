import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; 
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cart, addToCart } from '../store/slicers/cartSlicer';
import { fetchProductData, product } from '../store/slicers/productSlicer';
import { fetchCurrencyData, selectCurrency } from '../store/slicers/exchangeSlice';

const Product = () => {
    const cartItems = useSelector(cart);
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.auth);
    const temp = useSelector(product);
    const tempProduct={
        title:temp.product.name,image:temp.product.url,id:temp.product._id,
        price:temp.product.price,
        description:temp.product.description
    }
    const data={...temp,product:tempProduct}
    const currency = useSelector(selectCurrency);
    const { id } = useParams();
    const [displayPrice, setDisplayPrice] = useState(``);
    const navigate=useNavigate()

    useEffect(() => {
        console.log(`https://ecommerce-api-8ga2.onrender.com/api/product/${id}`)
        dispatch(fetchProductData(`https://ecommerce-api-8ga2.onrender.com/api/product/${id}`));
    }, [id, dispatch]);

    useEffect(() => {
        dispatch(fetchCurrencyData());
    }, [dispatch]);

    const priceWithSign = (price) => {
        let sign = "";
        if (currency.currentcurrency === 'USD') {
            sign = '$ ';
        } else if (currency.currentcurrency === 'INR') {
            sign = 'Rs ';
        } else {
            sign = 'AUD ';
        }

        const conversionRate = currency.currencydata.conversion_rates[currency.currentcurrency] || 1;
        const newPrice = (price * conversionRate).toFixed(2);
        return sign + newPrice;
    };

    useEffect(() => {
        if (data.product && currency.currencydata.conversion_rates) {
            setDisplayPrice(priceWithSign(data.product.price));
        }
    }, [currency.currentcurrency]);

    if (data.loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container mt-6   '>
            <div className='p-2 shadow-md flex justify-start gap-10'>
                <img
                    src={data.product.image}
                    alt={data.product.title}
                    style={{ width: '250px', height: '250px' }}
                    className=' col-span-2'
                />
                <div className='col-span-4'>
                    <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden'>{data.product.title}</h2>
                    <h3 className='text-left mt-3'>{data.product.description}</h3>
                    <div className='flex mt-2 gap-4'>
                        <p className='text-1xl font-bold leading-9'>{displayPrice || `$${data.product.price}`}</p>
                        {!(cartItems?.items?.some((product) => product.id === data.product.id)) ? (
                            <button
                                className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!loggedIn) {
                                        navigate("/login");
                                        return;
                                    }
                                    dispatch(addToCart({ ...data.product, quantity: 1 })); 
                                }}
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <Link to='/cart' className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl'>
                                Go to Cart
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
