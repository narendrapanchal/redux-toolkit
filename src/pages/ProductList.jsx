import React from 'react'
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';

const  ProductList=()=> {
    const data=useLoaderData()
   
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10'>
      {data.map((product,index)=><ProductCard {...product} key={product.id}/>)}
    </div>
  )
}

export default ProductList
