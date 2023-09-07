import { combineReducers } from "@reduxjs/toolkit";
import example from "./example";
import menu from "./menu";
import branch from "./branch";
import { HYDRATE } from "next-redux-wrapper";


const rootReducer = (state:any, action:any) => {
    const combineReducer = combineReducers({
        example : example.reducer,
        menu : menu.reducer,
        branch : branch.reducer,
        
    })
    if (action.type === HYDRATE) {
        const nextState = {
          ...state,
          ...action.payload,
        }
        return nextState
    }
    return combineReducer(state, action)
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;