import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

const  Product=()=> {
    const [data,setData]=useState([]);
    const {id}=useParams()    
    const [addToCart,setAddToCart]=useState(false)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((data)=>{
            setData(data);
            console.log(JSON.stringify(data,null,2));
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
  return (
    <div className='grid '>
      <div className='p-2 shadow-md flex gap-10' >
        <img src={data.image} alt={data.    title} style={{width:"250px",height:"250px"}} className='m-auto col-span-2' />
       <div className='col-span-4'>
       <h2 className='text-2xl font-bold text-left mt-1 truncate whitespace-nowrap overflow-hidden  '>{data.title}</h2>
       <h3 className=' text-left mt-3   '>{data.description}</h3>
        <div className='flex  mt-2 gap-4'>
        <p className='text-1xl font-bold leading-9' >${data.price}</p>
        {!addToCart?<button className='bg-green-700 text-white font-bold p-2 rounded text-1xl' onClick={(()=>{
            setAddToCart(true)
        })}>Add to Cart</button>:   <a href={`/products/${id}`}className='bg-green-700 text-white font-bold p-2 rounded text-1xl'>Got to Cart</a>
        }
        </div>
       </div>
      
    </div>
    </div>
  )
}

export default Product
