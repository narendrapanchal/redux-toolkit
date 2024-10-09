import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlicer'
import cartSlice  from './slicers/cartSlicer'
import blogSlice from './slicers/blogSlicer'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart:cartSlice,
    blog:blogSlice
  },
})


