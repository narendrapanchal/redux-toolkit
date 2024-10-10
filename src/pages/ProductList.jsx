import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductCategory, fetchProductData, product } from '../store/slicers/productSlicer';

const ProductList = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const products = useSelector(product);

  useEffect(() => {
    dispatch(fetchProductData("https://ecommerce-api-8ga2.onrender.com/api/product/"));
    dispatch(fetchProductCategory());
  }, [dispatch]);

  useEffect(() => {
    if (category !== "") {
      dispatch(fetchProductData(`https://ecommerce-api-8ga2.onrender.com/api/product/?category=${category}`));
    } else {
      dispatch(fetchProductData("https://ecommerce-api-8ga2.onrender.com/api/product/"));
    }
  }, [category, dispatch]);

  const filteredProducts = products?.product?.filter((product) => {
    const productPrice = product.price;

    const isBrandMatch = brand === "" || product.brand === brand;
    const isMinPriceMatch = minPrice === "" || productPrice >= Number(minPrice);
    const isMaxPriceMatch = maxPrice === "" || productPrice <= Number(maxPrice);

    return isBrandMatch && isMinPriceMatch && isMaxPriceMatch;
  });

  if (products.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="">All Categories</option>
          {products?.categories?.map(({ category }) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        >
          <option value="">All Brands</option>
          {products?.brands?.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <div className="flex space-x-2 mb-2">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-10 container'>
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
            {...product}
              key={product._id}
              title={product.name}
              image={product.url}
              rating={product.ratings?.[0]?.star || 0} 
              id={product._id}
            />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </>
  );
};

export default ProductList;
