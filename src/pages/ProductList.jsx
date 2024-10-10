import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductData, product } from '../store/slicers/productSlicer';

const  ProductList=()=> {
  const dispatch=useDispatch();
  const products=useSelector(product)
  useState(()=>{
    dispatch(fetchProductData("https://fakestoreapi.com/products"))
  },[])

  if(products.loading){
    return <div>Loading...</div>
  }
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
      {products?.product?.length>0&&products?.product.map((product,index)=><ProductCard {...product} key={product.id}/>)}
    </div>
  )
}

export default ProductList
