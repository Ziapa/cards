import React, {useState} from "react"
import s from "./NavBar.module.scss"
import {NavLink} from "react-router-dom"

export const NavBar = () => {

    const [hide, setHide] = useState(false)

    return (
        <div className={s.wrapper}>


            <div style={ {alignItems: "center"} } >
                <div onClick={() => setHide(!hide)}> Setting</div>


                <NavLink style={ { display: hide ? "none" : "" } } to={"setPassword"}> SetPassword </NavLink>
            </div>
            <NavLink to={"profile"}> Profile </NavLink>
            <NavLink to={"login"}> Login </NavLink>
            <NavLink to={"registration"}> Registration </NavLink>

            <NavLink to={"forgotPassword"}> forgotPassword </NavLink>
        </div>
    )
}