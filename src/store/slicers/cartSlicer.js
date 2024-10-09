import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  loading: false,
  isError: "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      localStorage.setItem(
        "cart",
        JSON.stringify([...localData, { ...action.payload.data, quantity: 1 }])
      );
      state.cart.items = [
        ...localData,
        { ...action.payload.data, quantity: 1 },
      ];
    },
    handleCartUpdate: (state, action) => {
      console.log(action.payload);
      let temp = state.items;
      temp.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity;
        }
        return item;
      });
      state.items = temp;
    },
    handleCartDelete: (state, action) => {
      console.log("handleCartDelete", action.payload);
      const cart = [...state.cart.items].filter(
        (item) => action.payload.id !== item.id
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      state.cart.items([...cart]);
    },
  },
});
export const cart = (state) => {
  return state.cart;
};
export const { addToCart, handleCartUpdate, handleCartDelete } =
  cartSlice.actions;
export default cartSlice.reducer;
