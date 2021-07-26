import React from "react"
import s from "./NavBar.module.scss"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className={s.wrapper}>
            <NavLink to={"profile"} > Profile </NavLink>
            <NavLink to={"login"} > Login </NavLink>
            <NavLink to={"registration"} > Registration </NavLink>
            <NavLink to={"setPassword"} > SetPassword </NavLink>
            <NavLink to={"forgotPassword"} > forgotPassword </NavLink>
        </div>
    )
}