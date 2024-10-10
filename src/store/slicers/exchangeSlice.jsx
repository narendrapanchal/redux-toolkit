import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = `https://v6.exchangerate-api.com/v6/bb323dc8baed6a9db1f5ec3f/latest/USD`;

export const fetchCurrencyData = createAsyncThunk(
    'currency/fetchCurrencyData',
    async () => {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Failed to fetch currency data');
        }
        const data = await response.json();
        return data; 
    }
);

const initialState = {
    currencydata: [], 
    previouscurrency : "USD",
    currentcurrency: "",
    isError: null, 
    isloading: false,
};

const currencySlice = createSlice({
    name: "currencydata",
    initialState: initialState,
    reducers: {
        setcurrentcurrency : (state,action)=>{
            state.currentcurrency = action.payload;
        },
        setprevcurrency : (state,action)=>{
            state.previouscurrency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencyData.pending, (state) => {
                state.isloading = true; 
            })
            .addCase(fetchCurrencyData.fulfilled, (state, action) => {
                state.currencydata = action.payload; 
                state.isloading = false; 
            })
            .addCase(fetchCurrencyData.rejected, (state, action) => {
                state.isloading = false; 
                state.isError = action.error.message; 
            });
    },
});


export const {setcurrentcurrency,setprevcurrency} = currencySlice.actions;
export const selectCurrency = (state) => state.currencydata;
export default currencySlice.reducer;
