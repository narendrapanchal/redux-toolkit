import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData)=>{
        const response=await fetch('https://ecommerce-api-8ga2.onrender.com/api/user/register',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userData),
            credentials: 'include',
        });
        const data=await response.json();
        return data;
    }
)
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData)=>{
        console.log("userData",userData)
      try{
        const response=await fetch('https://ecommerce-api-8ga2.onrender.com/api/user/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(userData),
            credentials: 'include',
        });
        const data=await response.json();
        console.log("data",data);
        return data;
      }catch(err){
        console.log("Something went wrong", err.message);
      }
    }
)

const initialState = {
    loading : false,
    error : null,
    user : null,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.loading = false;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Something went wrong please try again.";
        })
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state,action) => {
            console.log(action.payload);
            state.loading = false;
            state.user=action.payload;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Something went wrong please try again.";
        })
    }
})
export const user=(state)=>state.user;
export default userSlice.reducer;
/**
 

"narendrapanchal020@gmail.com"
Panchal123
 */