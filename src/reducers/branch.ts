import { createSlice } from "@reduxjs/toolkit";
import { branchStatisticAction, branchDataAction } from "actions/branch";
import { BranchStateType } from "types/type";


export const initialState = {

    branchStatisticLoding: false,
    branchStatisticError : false,
    branchStatistic : null,

    // branchAddLoding: false,
    // branchAddError: false,

    branchDataLoding : false,
    branchDataError : false,
    branchData: null

} as BranchStateType

const branchSlice = createSlice({
    name: 'branchSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        // 통계 데이터
        .addCase(branchStatisticAction.pending, (state) => {
            state.branchStatisticLoding = true
        })

        .addCase(branchStatisticAction.fulfilled, (state, action) => {
            state.branchStatisticLoding = false
            state.branchStatisticError = false
            state.branchStatistic = action.payload
        })

        .addCase(branchStatisticAction.rejected, (state, action) => {
            state.branchStatisticLoding = false
            state.branchStatisticError = true
        })

        // // 창고 추가
        // .addCase(branchAddAction.pending, (state) => {
        //     state.branchAddLoding = true
        // })

        // .addCase(branchAddAction.fulfilled, (state, action) => {
        //     // state.branchStatistic.push(action.payload)
        //     state.branchAddLoding = false
        //     state.branchAddError = false
        // })

        // .addCase(branchAddAction.rejected, (state, action) => {
        //     state.branchAddLoding = false
        //     state.branchAddError = true
        // })


        
        .addCase(branchDataAction.pending, (state) => {
            state.branchDataLoding = true
        })

        .addCase(branchDataAction.fulfilled, (state, action) => {
            state.branchData = action.payload
            state.branchDataLoding = false
            state.branchDataError = false
        })

        .addCase(branchDataAction.rejected, (state, action) => {
            state.branchDataLoding = false
            state.branchDataError = true
        })



        
        .addDefaultCase((state,action) => {})
})

export default branchSlice



