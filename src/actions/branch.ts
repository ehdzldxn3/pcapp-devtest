import { createAsyncThunk } from "@reduxjs/toolkit";
import branch from "../pages/api/branch.json"


export const branchStatisticAction = createAsyncThunk('branchStatistic', async (data, { rejectWithValue }) => {
    try {

        let response = 'test'
        console.log(branch)
        
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})