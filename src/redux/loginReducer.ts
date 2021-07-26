import {loginAPI} from "../DAL/API";
import {setProfileAC, SetProfileACType} from "./profileReducer";
import {Dispatch} from "redux";

export type LoginActionType =
    | LoginACType
    | SetProfileACType
    | DisableBtnACType

type LoginACType = ReturnType<typeof loginAC>
type DisableBtnACType = ReturnType<typeof disableBtnAC>

export type InitialStateLoginType = {
    isLogin: boolean
    disableBtn: boolean
}

const initialState: InitialStateLoginType = {
    isLogin: false,
    disableBtn: false
}


export const loginReducer = (state: InitialStateLoginType = initialState, action: LoginActionType) => {
    switch (action.type) {

        case"LOGIN" :
            return {
                ...state,
                isLogin: action.isLogin
            }
        case"DISABLE-BTN" :
            return {
                ...state,
                disableBtn: action.disableBtn
            }

        default:
            return state
    }
}

// ActionCreators

export const loginAC = (isLogin: boolean) => ({type: "LOGIN", isLogin}) as const
export const disableBtnAC = (disableBtn: boolean) => ({type: "DISABLE-BTN", disableBtn}) as const


// THUNKCreators

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<LoginActionType>) => {
    dispatch(disableBtnAC(true))
    loginAPI.login(email, password, rememberMe)
        .then((res) => {
            dispatch(setProfileAC(res.data))
            console.log(res.data)
            dispatch(disableBtnAC(false))
        })
}

export const logOutTC = () => (dispatch: Dispatch<LoginActionType>) => {

    loginAPI.logOut()
        .then(res => {
            console.log(res.data)
        })
}


export const meTC = () => (dispatch: Dispatch<LoginActionType>) => {
    loginAPI.me()
        .then(res => {
            dispatch(setProfileAC(res.data))
        })
}