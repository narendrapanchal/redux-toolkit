import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slicers/authSlicer'

export const store = configureStore({
  reducer: {
    auth:authSlice
  },
})


