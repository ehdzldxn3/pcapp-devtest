import { createSlice } from "@reduxjs/toolkit";
import { branchStatisticAction } from "actions/branch";





export interface BranchStateType {

    // 통계
    branchStatisticLoding : boolean,
    branchStatisticError : boolean,
    branchStatisticAvailable : number,
    branchStatisticExamined : number,
    branchStatisticAll : number,
    
}


export const initialState = {

    branchStatisticLoding : false,
    branchStatisticError : false,
    branchStatisticAvailable : 0,
    branchStatisticExamined : 0,
    branchStatisticAll : 0,
    

} as BranchStateType

const branchSlice = createSlice({
    name: 'branchSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        //pending state 변경 전
        .addCase(branchStatisticAction.pending, (state) => {
            
        })
        //fulfilled state 변경 후
        .addCase(branchStatisticAction.fulfilled, (state, action) => {

        })

        //rejected state 변경 실패
        .addCase(branchStatisticAction.rejected, (state, action) => {

        })


        .addDefaultCase((state,action) => {})
})

export default branchSlice



