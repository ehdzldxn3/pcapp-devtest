import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';
import thunk from "redux-thunk"; // redux-thunk 미들웨어 추가
import { createWrapper } from 'next-redux-wrapper';



const createStore = () => {
    const store = configureStore({
        reducer: rootReducer, // 리듀서
        middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    })
    return store
}

const store = createStore()
export type AppStore = ReturnType<typeof createStore>; // store 타입
export type RootState = ReturnType<typeof rootReducer>; // RootState 타입
export type AppDispatch = AppStore['dispatch']; // dispatch 타입
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

// ### next-redux-wrapper의 wrapper 생성
const wrapper = createWrapper<AppStore>(createStore, {
    debug: false
});

// wrapper 익스포트
export default wrapper;
