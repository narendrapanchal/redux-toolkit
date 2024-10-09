import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cart, addToCart, handleCartUpdate, handleCartDelete } from '../store/slicers/cartSlicer';

function Cart() {
    const cartData = useSelector(cart);
    const dispatch = useDispatch();
    function handleQuantity(quantity, id) {
        dispatch(handleCartUpdate({ id, quantity }))
    }
    const handleDelete = (id) => {
        console.log("id", handleCartDelete)
        dispatch(handleCartDelete({ id }));

    }
    return (
        <div className='container'>
            <div>
                {cartData.items.map((product, index) => (
                    <div className='flex gap-12 shadow-lg mt-4 p-4 mt-4'>
                        <img src={product.image} alt={product.title} width={200} height={200} />

                        <div key={index}>
                            <h2 className='text-3xl'>{product.title}</h2>
                            <p className='text-2xl mt-2'>Price: ${product.price}</p>
                            <p className='border border-gray-800 text-2xl w-max bg-gray-200 mt-2'> <button disabled={product.quantity === 1} onClick={() => {
                                handleQuantity(-1, product.id)
                            }} className='px-2 text-4xl'>-</button><button className=' p-2 pb-2 border-l border-gray-800 border-r border-gray-800 '>{product.quantity}</button> <button onClick={() => {
                                console.log("product.id", product.id)
                                handleQuantity(1, product.id);
                            }} className=' px-2 text-4xl'>
                                    +
                                </button></p>
                            <p className='text-black font-bold text-3xl mt-2'>Total ${product.quantity * product.price}</p>
                            <button className='bg-red-500 text-white font-bold p-2 mt-4 rounded w-40' onClick={() => {
                                handleDelete(product.id)
                            }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='text-3xl font-bold text-right mt-2'>Total: ${cartData.items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</h2>
            <div className='flex justify-self-end justify-end'>

                <button className='bg-green-800  text-2xl mt-2 mb-2 text-white font-bold p-2 rounded'>Checkout</button>
            </div>

        </div>
    )
}

export default Cart
