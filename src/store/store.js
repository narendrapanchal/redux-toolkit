import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlicer'
import cartSlice  from './slicers/cartSlicer'
import blogSlice from './slicers/blogSlicer'
import productSlice from './slicers/productSlicer'
import currencySlice from './slicers/exchangeSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart:cartSlice,
    blog:blogSlice,
    product:productSlice,
    currencydata : currencySlice
  },
})


