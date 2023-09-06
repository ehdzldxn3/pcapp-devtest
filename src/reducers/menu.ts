import { createSlice } from "@reduxjs/toolkit";
import { menuGetAction } from "actions/menu";


interface MenuType {
    key : string
    label : string
} 
interface ErrorType {
    msg : string
    err : boolean
} 

interface MenuState {
    menuList : Array<MenuType>
    loading : boolean
    error : boolean
}

export const initialState = {
    menuList : new Array,
    loading : false,
    error : false
} as MenuState

const menuSlice = createSlice({
    name: 'menuSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        //pending state 변경 전
        .addCase(menuGetAction.pending, (state) => {
            state.loading = true;         
        })
        //fulfilled state 변경 후
        .addCase(menuGetAction.fulfilled, (state, action) => {
            state.menuList = action.payload;
            state.loading = false;
            state.error = false;
        })

        //rejected state 변경 실패
        .addCase(menuGetAction.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        })


        .addDefaultCase((state,action) => {})
})

export default menuSlice


