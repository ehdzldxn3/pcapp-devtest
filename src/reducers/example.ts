import { createSlice } from "@reduxjs/toolkit";

import {
    exampleAction
} from '../actions/example'


interface ExampleState {
    num : number
}

export const initialState = {
    num : 0
} as ExampleState

const exampleSlice = createSlice({
    name: 'exampleSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        //pending state 변경 전
        .addCase(exampleAction.pending, (state) => {

        })
         //fulfilled state 변경 후
        .addCase(exampleAction.fulfilled, (state, action) => {
            state.num = action.payload
            
        })
        //rejected state 변경 실패
        .addCase(exampleAction.rejected, (state, action) => {

        })


        .addDefaultCase((state,action) => {})
})

export default exampleSlice