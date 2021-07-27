import React, {ChangeEvent, useState} from "react";
import s from "./Login.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../redux/loginReducer";
import {AppStateType} from "../../redux/redux-store";
import {NavLink} from "react-router-dom";
import {Input} from "../GeneralComponents/Input/Input";
import {Button} from "../GeneralComponents/Button/Button";

export const Login = () => {
    const [email, setLogin] = useState("")
    const [password, setPassword] = useState("")
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

    return (
        <div className={s.modal}>
            <div className={s.modal_body}>
                <div className={s.modal_content}>
                    <h1>It-Incubator</h1>
                    <h2> Sign in </h2>

                    <Input label={"Login"} value={email} onChange={onChangeHandlerLogin}/>
                    <Input label={"Password"} value={password} onChange={onChangeHandlerPassword}/>

                    <div>
                        <label>Remember me</label>
                        <input className={s.input} type="checkBox" checked={rememberMe}
                               onChange={() => setRememberMe(!rememberMe)}/>
                    </div>

                    <Button value={"Login"} onClick={() => register(email, password, rememberMe)} disable={disableBtn}/>

                    <div className={s.forgot}>
                        Forgot <NavLink to={"forgotPassword"}> /Password </NavLink>

                        <NavLink to={"registration"}> </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}