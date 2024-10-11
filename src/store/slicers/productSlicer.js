import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProductData=createAsyncThunk(
    'product/fetchProductData',
    async(url)=>{
        const response=await fetch(url);
        const data= await response.json();
        return data
    }
)
export const fetchProductCategory=createAsyncThunk(
    'product/fetchProductCategories',
    async(url='https://ecommerce-api-8ga2.onrender.com/api/product/categories/all')=>{
        const response=await fetch(url);
        const data= await response.json();  
        return data.filter((product)=>product.count>0);
    }
)
const initialState={
    product:[],
    loading:false,
    isError:"",
    categories:[],
    brands:[]
}
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductData.fulfilled,(state,action)=>{
            state.product=action.payload;
            state.loading=false;
            state.brands=Object.keys(action?.payload.length>0?action?.payload.reduce((acc,product)=>{
                acc[product.brand]=1
                return acc;
            },{}):[])
        })
        builder.addCase(fetchProductData.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchProductData.rejected,(state,action)=>{
            state.isError="Something went wrong.";
            state.loading=false;
        })
        builder.addCase(fetchProductCategory.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.loading=false;
        })
        builder.addCase(fetchProductCategory.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchProductCategory.rejected,(state,action)=>{
            state.isError="Something went wrong.";
            state.loading=false;
        })
           
    }
})
export const product=(state)=>state.product
export default productSlice.reducer;


// BASE URL: https://ecommerce-api-8ga2.onrender.com

// ENDPOINTS:
// all products: /api/product
// all categories: /categories/all
// brands by category: /brands/:category