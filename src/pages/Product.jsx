import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cart ,addToCart} from '../store/slicers/cartSlicer';

const Product = () => {
    const data=useLoaderData();
    const dispatch=useDispatch();
    const cartItems=useSelector(cart);
    console.log("cartItems",cartItems)
    
    return (
        <div className='grid container mt-6'>
            <div className='p-2 shadow-md flex gap-10'>
                <img src={data.image} alt={data.title} style={{ width: "250px", height: "250px" }} className='m-auto col-span-2' />
                <div className='col-span-4'>
                    <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden  '>{data.title}</h2>
                    <h3 className=' text-left mt-3   '>{data.description}</h3>
                    <div className='flex  mt-2 gap-4'>
                        <p className='text-1xl font-bold leading-9' >${data.price}</p>
                        {!(cartItems?.items?.some((product)=>product.id==data.id)) ? <button className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl' onClick={((e) => {
                            e.stopPropagation();
                            dispatch(addToCart({...data, quantity: 1 }));
                        })}>Add to Cart</button> : <Link to={`/cart`} className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl'>Go to Cart</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
