import React, { useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData, product } from '../store/slicers/productSlicer'
import { Text } from '@chakra-ui/react'

const Home = () => {
    const dispatch=useDispatch();
    const data=useSelector(product);
    const {id}=useParams();
    useEffect(()=>{
      dispatch(fetchProductData(`https://ecommerce-api-8ga2.onrender.com/api/product/`))
    },[id])
    if(data.loading){
      return <div>Loading...</div>
    }
    console.log("data-------",data)
  return (
    <div>
      <Slider />
      <div className='grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
        {data?.product?.length >0 && data?.product?.slice(0,4).map((data, index) => <ProductCard {...data}
         title={data.name}
         image={data.url} 
         rating={data?.product?.ratings!=null?data?.product?.ratings[0].star:0} 
         id={data._id}
        key={data._id} />)}
      </div>
    </div>
  )
}

export default Home