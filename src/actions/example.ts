
import { createAsyncThunk } from "@reduxjs/toolkit";



export const exampleAction = createAsyncThunk('example', async (data, { rejectWithValue }) => {
    try {
        let response = 1;
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})