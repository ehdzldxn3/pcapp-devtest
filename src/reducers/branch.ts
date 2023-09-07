import { createSlice } from "@reduxjs/toolkit";
import { branchStatisticAction } from "actions/branch";
import { branchStatisticType } from "types/type";






export interface BranchStateType {

    // 통계
    branchStatisticLoding : Boolean
    branchStatisticError : Boolean
    branchStatistic : branchStatisticType | null
}


export const initialState = {

    branchStatisticLoding: false,
    branchStatisticError : false,
    branchStatistic : null

} as BranchStateType

const branchSlice = createSlice({
    name: 'branchSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        //pending state 변경 전
        .addCase(branchStatisticAction.pending, (state) => {
            state.branchStatisticLoding = true
            
        })
        //fulfilled state 변경 후
        .addCase(branchStatisticAction.fulfilled, (state, action) => {
            state.branchStatisticLoding = false
            state.branchStatisticError = false
            state.branchStatistic = action.payload
        })

        //rejected state 변경 실패
        .addCase(branchStatisticAction.rejected, (state, action) => {
            state.branchStatisticLoding = false
            state.branchStatisticError = true
        })


        .addDefaultCase((state,action) => {})
})

export default branchSlice



