import { combineReducers } from "@reduxjs/toolkit";
import example from "./example";
import menu from "./menu";


const rootReducer = (state:any, action:any) => {
    const combineReducer = combineReducers({
        example : example.reducer,
        menu : menu.reducer,
    })
    return combineReducer(state, action)
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;