import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const data=useLoaderData()
   
  return (
    <div className='grid mt-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
      {data.map((product,index)=><ProductCard {...product} key={product.id}/>)}
    </div>
  )
}

export default Home