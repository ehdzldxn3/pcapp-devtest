import { createAsyncThunk } from "@reduxjs/toolkit";

import branch from "../pages/api/branch.json"
import { Branch, BranchStatisticType, UnitBranchSelect } from "types/type";


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
            if(item.isExamined === 2) notExamined++
        })

        const response = {
            available : available,
            notAvailable : notAvailable,
            examined : examined,
            notExamined : notExamined,
            underExamined : underExamined,
            totalBranch : branch.length
        } as BranchStatisticType
        
        
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})




export const branchDataAction = createAsyncThunk('branchDataAction', async (data, { rejectWithValue }) => {
    try {

        let response: Array<Branch> = branch

        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})


export const branchUnitSelectAction = createAsyncThunk('branchSelectData', async (data, { rejectWithValue }) => {
    try {
        let response: Array<UnitBranchSelect> = new Array<UnitBranchSelect>

        branch.map((item, index) => {
            response.push({
                value : item.id.toString(),
                label : item.branchName.toString()
            })
        })
    
        return response
    } catch (error) {
        return rejectWithValue(error);
    }
})



