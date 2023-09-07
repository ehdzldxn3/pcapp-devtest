import { createAsyncThunk } from "@reduxjs/toolkit";
import { branchStatisticType } from "types/type";
import branch from "../pages/api/branch.json"


export const branchStatisticAction = createAsyncThunk('branchStatistic', async (data, { rejectWithValue }) => {
    try {
        let available: number = 0
        let notAvailable: number = 0
        let examined: number = 0
        let notExamined: number = 0
        let underExamined: number = 0
        branch.map((item, index) => {
            if(item.isAvailable === 0) available++
            if(item.isAvailable === 1) notAvailable++
            if(item.isExamined === 0) underExamined++
            if(item.isExamined === 1) examined++
            if(item.isExamined === 1) notExamined++
        })

        const response = {
            available : available,
            notAvailable : notAvailable,
            examined : examined,
            notExamined : notExamined,
            underExamined : underExamined,
            totalBranch : branch.length
        } as branchStatisticType
        
        
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})