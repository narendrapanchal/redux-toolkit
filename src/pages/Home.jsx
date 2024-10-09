import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'

const Home = () => {
  const data = useLoaderData()

  return (
    <div>
      <Slider />
      <div className='grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
        {data.map((product, index) => <ProductCard {...product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Home