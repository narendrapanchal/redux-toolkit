import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cart ,addToCart} from '../store/slicers/cartSlicer';
import { fetchProductData, product } from '../store/slicers/productSlicer';

const Product = () => {
    const cartItems=useSelector(cart);
    const dispatch=useDispatch();
    const data=useSelector(product)
    const {id}=useParams();
    useEffect(()=>{
      dispatch(fetchProductData(`https://fakestoreapi.com/products/${id}`))
    },[id])
  
    if(data.loading){
      return <div>Loading...</div>
    }
    
    return (
        <div className='grid container mt-6'>
            <div className='p-2 shadow-md flex gap-10'>
                <img src={data.product.image} alt={data.product.title} style={{ width: "250px", height: "250px" }} className='m-auto col-span-2' />
                <div className='col-span-4'>
                    <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden  '>{data.product.title}</h2>
                    <h3 className=' text-left mt-3   '>{data.product.description}</h3>
                    <div className='flex  mt-2 gap-4'>
                        <p className='text-1xl font-bold leading-9' >${data.product.price}</p>
                        {!(cartItems?.items?.some((product)=>product.id==data.product.id)) ? <button className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl' onClick={((e) => {
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
