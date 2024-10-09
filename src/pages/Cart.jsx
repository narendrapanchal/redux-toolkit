import React, { useState } from 'react'

function Cart() {
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    function handleQuantity(quantity,index){
        cart[index].quantity+=quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]);
    }
    const handleDelete=(data)=>{
        let localData=JSON.parse(localStorage.getItem('cart'))||[];
        localData=localData.filter((product)=>product.id!==data.id);
        localStorage.setItem('cart', JSON.stringify(localData));
        setCart([...localData]);
    }
    return (
        <div className='container'>
            <h1>Your Cart</h1>
            <div>
                {cart.map((product, index) => (
                    <div className='flex gap-5 shadow-lg mt-4 p-4 mt-4'>
                      <img src={product.image} alt={product.title} width={200} height={200}/>

                        <div key={index}>
                            <h2>{product.title}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Quantity:  <button disabled={product.quantity===1} onClick={()=>{
                                handleQuantity(-1,index)
                            }}>-</button>{product.quantity} <button onClick={()=>{
                                handleQuantity(1,index)
                            }}>
                                +
                            </button></p>
            <button onClick={()=>{
                handleDelete(product)
            }}>Delete</button>

                            
                        </div>

                    </div>
                ))}
            </div>
            <h2>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</h2>
            <button onClick={() => localStorage.removeItem('cart')}>Clear Cart</button>

        </div>
    )
}

export default Cart
