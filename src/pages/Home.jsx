import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData, product } from '../store/slicers/productSlicer'

const Home = () => {
    const dispatch=useDispatch();
    const data=useSelector(product)
    const {id}=useParams();
    useEffect(()=>{
      dispatch(fetchProductData(`https://fakestoreapi.com/products?limit=4`))
    },[id])
    if(data.loading){
      return <div>Loading...</div>
    }
  return (
    <div>
      <Slider />
      <div className='grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
        {data?.product?.map((product, index) => <ProductCard {...product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Home