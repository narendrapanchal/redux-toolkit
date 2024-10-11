import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlicer'
import cartSlice  from './slicers/cartSlicer'
import blogSlice from './slicers/blogSlicer'
import productSlice from './slicers/productSlicer'
import currencySlice from './slicers/exchangeSlice';
import userSlice from './slicers/userSlicer'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    user:userSlice,
    cart:cartSlice,
    blog:blogSlice,
    product:productSlice,
    currencydata : currencySlice
  },
})


