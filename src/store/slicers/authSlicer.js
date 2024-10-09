import { createSlice } from '@reduxjs/toolkit'

const initialUser = {
    email: "",
    password: "",
    loggedIn: false,
} 

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialUser,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.loggedIn = true;
        },
        logout: (state) => {
            state.email = "";
            state.password = "";
            state.loggedIn = false;
        }
    }
});
export const userstatus = (state) => {
    return state.auth.loggedIn;
  };
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
