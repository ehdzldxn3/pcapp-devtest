import { createSlice } from "@reduxjs/toolkit";
import { menuGetAction } from "actions/menu";
import { MenuStateType } from "types/type";




export const initialState = {
    menuList : new Array,
    menuListloading : false,
    menuListerror : false
} as MenuStateType

const menuSlice = createSlice({
    name: 'menuSliceName',
    initialState,
    reducers: {},

    // 비동기
    extraReducers: (builder) => builder

        .addCase(menuGetAction.pending, (state) => {
            state.menuListloading = true;         
        })

        .addCase(menuGetAction.fulfilled, (state, action) => {
            state.menuList = action.payload;
            state.menuListloading = false;
            state.menuListerror = false;
        })

        .addCase(menuGetAction.rejected, (state, action) => {
            state.menuListloading = false;
            state.menuListerror = true;
        })

        .addDefaultCase((state,action) => {})
})

export default menuSlice



