import { createSlice } from "@reduxjs/toolkit";
import { branchDataAction, branchStatisticAction, branchUnitSelectAction } from "actions/branch";
import { BranchStateType } from "types/type";


export const initialState = {

    branchStatisticLoding: false,
    branchStatisticError : false,
    branchStatistic : null,

    branchDataLoding : false,
    branchDataError : false,
    branchData: null,

    branchUnitSelectListLoding : false,
    branchUnitSelectListError : false,
    branchUnitSelectList : null,

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
        
        // 전체 데이터 뽑기
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



        // 유닛 페이지 select 박스 데이터
        .addCase(branchUnitSelectAction.pending, (state) => {
            state.branchUnitSelectListLoding = true
        })

        .addCase(branchUnitSelectAction.fulfilled, (state, action) => {
            state.branchUnitSelectList = action.payload
            state.branchUnitSelectListLoding = false
            state.branchUnitSelectListError = false
        })

        .addCase(branchUnitSelectAction.rejected, (state, action) => {
            state.branchUnitSelectListLoding = false
            state.branchUnitSelectListError = true
        })



        
        .addDefaultCase((state,action) => {})
})

export default branchSlice



