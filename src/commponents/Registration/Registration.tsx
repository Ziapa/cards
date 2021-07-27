import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import s from "../Registration/Registration.module.scss";
import {NavLink} from "react-router-dom";
import {Button} from "../GeneralComponents/Button/Button";
import {Input} from "../GeneralComponents/Input/Input";

export const Registration = () => {

    const [email, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("true")

    const dispatch = useDispatch()
    const disableBtn = useSelector<AppStateType, boolean>((state => state.login.disableBtn))


    return (
        <div className={s.modal}>
            <div className={s.modal_body}>
                <div className={s.modal_content}>
                    <h1>It-Incubator</h1>
                    <h2> Sign in </h2>

                    <Input label={"Email"} value={email} onChange={() => {}}/>
                    <Input label={"Password"} value={password} onChange={() => {}}/>
                    <Input label={"Repeat Password"} value={repeatPassword} onChange={() => {}}/>



                    <Button value={"Registration"} onClick={() => {
                        console.log("btn-terst")
                    }} disable={disableBtn}/>

                    <div className={s.forgot}>
                        <NavLink to={"login"}> Sign Up </NavLink>

                        <NavLink to={"registration"}> </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}