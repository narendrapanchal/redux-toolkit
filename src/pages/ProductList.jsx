import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductCategory, fetchProductData, product } from '../store/slicers/productSlicer';

const  ProductList=()=> {
  const dispatch=useDispatch();
  const [category,setCategory]=useState("");
  const [brand,setBrand]=useState("");
  const products=useSelector(product)
  console.log( products)
  useState(()=>{
    dispatch(fetchProductData("https://ecommerce-api-8ga2.onrender.com/api/product/"))
    dispatch(fetchProductCategory())
  },[])
  useEffect(()=>{
    if(category!==""){
      console.log("category",category)
      dispatch(fetchProductData("https://ecommerce-api-8ga2.onrender.com/api/product/?category="+category))
    }else{
      dispatch(fetchProductData("https://ecommerce-api-8ga2.onrender.com/api/product/"))
    }
  },[category])

  if(products.loading){
    return <div>Loading...</div>
  }
  return (
    <>
      <select value={category} onChange={(e)=>{
        console.log("e.target.value",e.target.value)
        setCategory(e.target.value)
      }}>
        <option value="">All</option>
      {products?.categories?.map(({category})=><option value={category}>{category}</option>)}
      </select>
      <select value={brand} onChange={(e)=>{
        setBrand(e.target.value)
      }}>
        <option value="">All</option>
      {products?.brands?.map((brand)=><option value={brand}>{category}</option>)}
      </select>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
      {products?.product?.length>0&&products?.product.filter((product)=>product.brand==brand||brand=="").map((product,index)=><ProductCard {...product}
      title={product.name}
      image={product.url} 
      rating={products.ratings!=null?products.ratings[0].star?ratings[0].star:0:0} key={product.id}
      
      
      />)}
    </div>
      </>
  )
}

export default ProductList




