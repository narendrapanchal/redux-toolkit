import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProductCard = ({ id, title, price, image }) => {
  const [addToCart, setAddToCart] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='p-2 py-4 shadow-md' onClick={() => {
      navigate(`/products/${id}`)
    }} >
      <img src={image} alt={title} style={{ width: "250px", height: "250px" }} className='m-auto' />
      <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden  '>{title}</h2>
      <div className='flex justify-between mt-2 '>
        <p className='text-1xl font-bold leading-9' >${price}</p>
        {!addToCart ? <button className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl' onClick={((e) => {
          e.stopPropagation()
          setAddToCart(true)
        })}>Add to Cart</button> : <button onClick={(e) => {
          e.stopPropagation();
          navigate("/cart")
        }} className='bg-green-700 w-32 text-white font-bold p-2 rounded text-1xl'>Go to Cart</button>
        }
      </div>
    </div>
  )
}

export default ProductCard
