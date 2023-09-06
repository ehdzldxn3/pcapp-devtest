import { createAsyncThunk } from "@reduxjs/toolkit";
import menu from "../pages/api/menu.json"


export const menuGetAction = createAsyncThunk('menuGet', async (data, { rejectWithValue }) => {
    try {
        console.log('menuGetAction')
        let response = menu
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})