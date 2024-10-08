import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
    name:"",
    email:"",
    password:"",
} 

export const authSlice = createSlice({
    name:'auth',
    initialState:initialUser,
    reducers:{
        login: (state, action)=>{

        }
    }
})


export const { login } = authSlice.actions

export default authSlice.reducer