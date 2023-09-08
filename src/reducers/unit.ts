import { createSlice } from "@reduxjs/toolkit";
import { UnitStateType } from "types/type";


export const initialState = {




} as UnitStateType

const branchSlice = createSlice({
    name: 'branchSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder



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





        
        .addDefaultCase((state,action) => {})
})

export default branchSlice



