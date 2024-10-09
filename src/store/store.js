import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlicer'
import cartSlice  from './slicers/cartSlicer'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart:cartSlice
  },
})


