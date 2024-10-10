import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { cart, addToCart } from '../store/slicers/cartSlicer';
import { fetchCurrencyData, selectCurrency } from '../store/slicers/exchangeSlice';

const ProductCard = ({ id, title, price, image }) => {
    const dispatch = useDispatch();
    const { loggedIn } = useSelector(state => state.auth);
    const cartItems = useSelector(cart);
    const currency = useSelector(selectCurrency);
    
    useEffect(() => {
        dispatch(fetchCurrencyData());
    }, [dispatch]);

    const handleAdd = (data) => {
        dispatch(addToCart(data));
    };
    
    const navigate = useNavigate();

    const [displayprice, setDisplayPrice] = useState(`$${price}`);

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
        let newprice = (price * conversionRate).toFixed(2);
        return sign + newprice;
    };

    useEffect(() => {
        if (currency.currencydata.conversion_rates) {
            setDisplayPrice(priceWithSign(price));
        }
    }, [currency.currentcurrency]);

    return (
        <div className='p-2 py-4 shadow-md max-w-full' onClick={() => navigate(`/products/${id}`)}>
            <img src={image} alt={title} style={{ width: "250px", height: "250px" }} className='m-auto' />
            <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden'>{title}</h2>
            <div className='flex justify-between mt-2'>
                <p className='text-2xl font-bold leading-9  '>{displayprice}</p>
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
