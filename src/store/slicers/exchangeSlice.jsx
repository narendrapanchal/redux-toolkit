import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api = `https://v6.exchangerate-api.com/v6/bb323dc8baed6a9db1f5ec3f/latest/USD`;

export const fetchCurrencyData = createAsyncThunk(
    'currency/fetchCurrencyData',
    async () => {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('Failed to fetch currency data');
            }
            const data = await response.json();
            console.log("data--------", data);
            return data;
        } catch (err) {
            console.log("err.message------", err.message);
            throw err; 
        }
    }
);

const initialState = {
    currencydata: [],
    previouscurrency: "USD",
    currentcurrency: "",
    isError: null,
    isloading: false,
};

const currencySlice = createSlice({
    name: "currencydata",
    initialState: initialState,
    reducers: {
        setcurrentcurrency: (state, action) => {
            state.currentcurrency = action.payload;
        },
        setprevcurrency: (state, action) => {
            state.previouscurrency = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencyData.pending, (state) => {
                state.isloading = true;
                state.isError = null;
            })
            .addCase(fetchCurrencyData.fulfilled, (state, action) => {
                state.currencydata = action.payload.conversion_rates; 
                console.log("action.payload--------", action.payload);
                state.isloading = false;
            })
            .addCase(fetchCurrencyData.rejected, (state, action) => {
                state.isloading = false;
                state.isError = action.error.message; 
            });
    },
});

export const { setcurrentcurrency, setprevcurrency } = currencySlice.actions;
export const selectCurrency = (state) => state.currencydata;
export default currencySlice.reducer;

