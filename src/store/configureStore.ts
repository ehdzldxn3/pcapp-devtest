import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from '../reducers/rootReducer';
import thunk from "redux-thunk"; // redux-thunk 미들웨어 추가
const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    })
    return store
}
const wrapper = createWrapper(createStore, {
    debug: true,
})
export default wrapper;