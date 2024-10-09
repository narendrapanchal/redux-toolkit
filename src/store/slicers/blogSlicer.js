import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
export const fetchBlogData=createAsyncThunk(
    'blog/fetchBlogByUrl',
    async(url)=>{
        const response=await fetch(url);
        return await response.json();
    }
)
export const fetchBlogList=createAsyncThunk(
    'blog/fetchBlogList',async({limit,page})=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return {
            data: data.slice((page - 1) * limit, (page - 1) * limit + limit),
            pages: Math.ceil(data.length / limit),
          };
    }
)
const initialState={
    blog:null,
    isError:"",
    loading:false
}
const blogSlice=createSlice({
    name:"blog",
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBlogData.fulfilled,(state,action)=>{
            state.blog=action.payload;
            state.loading=false;
        })
        builder.addCase(fetchBlogData.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchBlogData.rejected,(state,action)=>{
            state.isError="Something went wrong";
            state.loading=false;
        })
        builder.addCase(fetchBlogList.fulfilled,(state,action)=>{
            state.blog=action.payload;
            state.loading=false;
        })
        builder.addCase(fetchBlogList.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchBlogList.rejected,(state,action)=>{
            state.loading=false;
            state.isError="Something Went Wrong"
        })

    }
})
export const blog=(state)=>state.blog;
export default blogSlice.reducer
