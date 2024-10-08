import React, { useState } from 'react'

const ProductCard=({id,title,price,image})=> {
    const [addToCart,setAddToCart]=useState(false)
  return (
    <div className='p-2 shadow-md' >
        <img src={image} alt={title} style={{width:"250px",height:"250px"}} className='m-auto' />
        <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden  '>{title}</h2>
        <div className='flex justify-between mt-2 '>
        <p className='text-1xl font-bold leading-9' >${price}</p>
        {!addToCart?<button className='bg-green-700 text-white font-bold p-2 rounded text-1xl' onClick={(()=>{
            setAddToCart(true)
        })}>Add to Cart</button>:   <a href={`/products/${id}`}className='bg-green-700 text-white font-bold p-2 rounded text-1xl'>Got to Cart</a>
        }
        </div>
      
    </div>
  )
}

export default ProductCard
