import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface LoggedInUserModel {
    id: number,
    username: string,
    password: string,
    admin: boolean,
    token: string
}

const initialState: LoggedInUserModel = {
    id: parseInt(localStorage.getItem('userId')),
    username: undefined,
    password: undefined,
    admin: undefined,
    token: localStorage.getItem('userToken')
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginAction: (state, action: PayloadAction<LoggedInUserModel>) => {
            localStorage.setItem('userToken', action.payload.token) 
            localStorage.setItem('userId', action.payload.id.toString()) 
            return {
                ...action.payload
            }
        },
        logoutAction: () => {
            localStorage.removeItem('userToken')
            localStorage.removeItem('userId')  
            localStorage.removeItem('gameId')  
            return {
                ...initialState,
                id: undefined,
                token: undefined
            }
        },
        updateUserAction: (state, action: PayloadAction<LoggedInUserModel>) => {
            return {
                ...state,
                password: action.payload.password
            }
        }
    }
})

export const { loginAction, logoutAction, updateUserAction } = userSlice.actions
export default userSlice.reducer