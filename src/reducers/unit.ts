import { createSlice } from "@reduxjs/toolkit";
import { unitStatisticAction, unitTableDataAction, unitItemTableData } from "actions/unit";
import { UnitStateType } from "types/type";


export const initialState = {

    unitStatisticLoding : false,
    unitStatisticError : false,
    unitStatistic : null,
    
    unitTableDataLoding : false,
    unitTableDataError : false,
    unitTableData : null,

    unitItemTableDataLoding : false,
    unitItemTableDataError : false,
    unitItemTableData : null

} as UnitStateType

const unitSlice = createSlice({
    name: 'unitSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        // Unit Statistic Data
        .addCase(unitStatisticAction.pending, (state) => {
            state.unitStatisticLoding = true
        })

        .addCase(unitStatisticAction.fulfilled, (state, action) => {
            state.unitStatistic = action.payload
            state.unitStatisticLoding = false
            state.unitStatisticError = false
        })

        .addCase(unitStatisticAction.rejected, (state, action) => {
            state.unitStatisticLoding = false
            state.unitStatisticError = true
        })

        // Unit Table Data
        .addCase(unitTableDataAction.pending, (state) => {
            state.unitTableDataLoding = true
        })

        .addCase(unitTableDataAction.fulfilled, (state, action) => {
            state.unitTableData = action.payload
            state.unitTableDataLoding = false
            state.unitTableDataError = false
        })

        .addCase(unitTableDataAction.rejected, (state, action) => {
            state.unitTableDataLoding = false
            state.unitTableDataError = true
        })

        // Unit Item Table Data
        .addCase(unitItemTableData.pending, (state) => {
            state.unitItemTableDataLoding = true
        })

        .addCase(unitItemTableData.fulfilled, (state, action) => {
            state.unitItemTableData = action.payload
            state.unitItemTableDataLoding = false
            state.unitItemTableDataError = false
        })

        .addCase(unitItemTableData.rejected, (state, action) => {
            state.unitItemTableDataLoding = false
            state.unitItemTableDataError = true
        })





        
        .addDefaultCase((state,action) => {})
})

export default unitSlice



