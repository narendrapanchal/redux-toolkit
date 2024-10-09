import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  items: localStorage.getItem("cart")!=null?JSON.parse(localStorage.getItem("cart")) : [],
  loading: false,
  isError: "",
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const localData=state.items;
      localStorage.setItem(
        "cart",
        JSON.stringify([...localData,action.payload])
      );
      state.items = [
        ...localData,
        action.payload,
      ];
    },
    handleCartUpdate: (state, action) => {
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
      const items = state.items.filter(
        (item) => action.payload.id !== item.id
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      state.items=items;
    },
  },
});
export const cart = (state) => {
  return state.cart;
};
export const { addToCart, handleCartUpdate, handleCartDelete } =
  cartSlice.actions;
export default cartSlice.reducer;
