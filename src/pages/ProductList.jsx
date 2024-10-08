import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

const  ProductList=()=> {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{
            setData(data)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10'>
      {data.map((product,index)=><ProductCard {...product} key={product.id}/>)}
    </div>
  )
}

export default ProductList
