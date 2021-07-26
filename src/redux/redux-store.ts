import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {setPasswordReducer} from "./setPasswordReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer";
import thunk from "redux-thunk";


let reducer = combineReducers({
profile: profileReducer,
login: loginReducer,
registration: registrationReducer,
setPassword: setPasswordReducer,
forgotPassword: forgotPasswordReducer
})

type ReducersType = typeof  reducer
export type AppStateType = ReturnType<ReducersType>

export let store = createStore(reducer, applyMiddleware(thunk))

//@ts-ignore

window.store = store