import React, {ChangeEvent, useState} from "react";
import s from "./Login.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {loginTC, logOutTC} from "../../redux/loginReducer";
import {AppStateType} from "../../redux/redux-store";

export const Login = () => {
    const [email, setLogin] = useState("smit4eggg@bk.ru")
    const [password, setPassword] = useState("12345678")
    const [rememberMe, setRememberMe] = useState(true)

    const dispatch = useDispatch()
    const disableBtn = useSelector<AppStateType, boolean>((state => state.login.disableBtn))

    const onChangeHandlerLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }
    const onChangeHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const register = (email: string, password: string, rememberMe: boolean) => {
        dispatch(loginTC(email, password, rememberMe))
    }

    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <div className={s.login}>

            <input type="text" placeholder={"login"} value={email} onChange={onChangeHandlerLogin}/>
            <input type="text" placeholder={"password"} value={password} onChange={onChangeHandlerPassword}/>
            <input type="checkBox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>

            <button onClick={() => register(email, password, rememberMe)} disabled={disableBtn}>login</button>
            <button onClick={logOut}>logOut</button>
        </div>
    );
}