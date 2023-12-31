import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../reducers/gameReducer';
import userReducer from '../reducers/userReducer';

export const store = configureStore({
    reducer: {
        gameReducer,
        userReducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector