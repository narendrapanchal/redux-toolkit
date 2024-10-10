import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cart, addToCart } from '../store/slicers/cartSlicer';
import { fetchCurrencyData, selectCurrency } from '../store/slicers/exchangeSlice';

const ProductCard = ({ id, title, price, image, rating }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loggedIn } = useSelector(state => state.auth);
    const cartItems = useSelector(cart);
    const currency = useSelector(selectCurrency);

    const [displayPrice, setDisplayPrice] = useState(`$${price}`);
    console.log(displayPrice)
    useEffect(() => {
        dispatch(fetchCurrencyData());
    }, [dispatch]);

    const priceWithSign = (price) => {
        let sign = "";
        if (currency.currentcurrency === 'USD') {
            sign = '$ ';
        } else if (currency.currentcurrency === 'INR') {
            sign = "Rs ";
        } else {
            sign = "AUD ";
        }

        const conversionRate = currency.currencydata.conversion_rates[currency.currentcurrency] || 1;
        let newPrice = (price * conversionRate).toFixed(2);
        return sign + newPrice;
    };

    useEffect(() => {
        if (currency.currencydata.conversion_rates) {
            setDisplayPrice(priceWithSign(price));
        }
    }, [currency.currentcurrency, price]);

    const handleAdd = (data) => {
        dispatch(addToCart(data));
    };


    const renderStars = (rating) => {
        const maxStars = 5;
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="text-yellow-500">&#9733;</span>);
        }

        if (halfStars) {
            stars.push(<span key="half" className="text-yellow-500">&#9734;</span>);
        }

        for (let i = fullStars + halfStars; i < maxStars; i++) {
            stars.push(<span key={`empty-${i}`} className="text-gray-400">&#9734;</span>);
        }

        return stars;
    };

    return (
        <div className='p-2 py-4 shadow-md max-w-full' onClick={() => navigate(`/products/${id}`)}>
            <img src={image} alt={title} style={{ width: "250px", height: "250px" }} className='m-auto' />
            <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden'>{title}</h2>
            <div className='flex mt-2'>
                <div className='flex items-center'>
                    {renderStars(rating)}
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <p className='text-2xl font-bold leading-9'>{displayPrice}</p>
                {!(cartItems?.items?.some((product) => product.id === id)) ? (
                    <button className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl' onClick={(e) => {
                        e.stopPropagation();
                        if (!loggedIn) {
                            navigate("/login");
                            return;
                        }
                        handleAdd({ id, title, price, image, quantity: 1 });
                    }}>
                        Add to Cart
                    </button>
                ) : (
                    <button onClick={(e) => {
                        e.stopPropagation();
                        navigate("/cart");
                    }} className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl'>
                        Go to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;

