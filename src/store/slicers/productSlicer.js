import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchProductData=createAsyncThunk(
    'product/fetchProductData',
    async(url)=>{
        const response=await fetch(url);
        return await response.json();
    }
)
const initialState={
    product:[],
    loading:false,
    isError:""
}
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductData.fulfilled,(state,action)=>{
            state.product=action.payload;
            state.loading=false;
        })
        builder.addCase(fetchProductData.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchProductData.rejected,(state,action)=>{
            state.isError="Something went wrong.";
            state.loading=false;
        })
           
    }
})
export const product=(state)=>state.product
export default productSlice.reducer;