import { combineReducers } from "@reduxjs/toolkit";

import branch from "./branch";
import unit from "./unit";
import { HYDRATE } from "next-redux-wrapper";


const rootReducer = (state:any, action:any) => {
    const combineReducer = combineReducers({
        branch : branch.reducer,
        unit : unit.reducer
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