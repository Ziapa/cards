import React, {ChangeEvent, useState} from "react";
import {Route, useHistory} from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [email, setLogin] = useState("smit4eggg@bk.ru")
    const [password, setPassword] = useState("12345678")
    const [rememberMe, setRememberMe] = useState(true)

    const history = useHistory()

    const onChangeHandlerLogin = (e:ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value)
    }
    const onChangeHandlerPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const register = (email: string, password: string, rememberMe: boolean) => {
        axios.post("https://neko-back.herokuapp.com/2.0/auth/login",  {
            email, password, rememberMe
        }, {
            withCredentials: true
        })
            .then( res => {
                console.log(res.data)
                console.log("test")
                return  history.push("/login")
            } )
    }

    const logOut = () => {
        axios.delete("https://neko-back.herokuapp.com/2.0/auth/me",
            {
                withCredentials: true
            })
            .then(res => {
                console.log("test")
            })
    }

    return (
        <div className="App">

            <input type="text" placeholder={"login"} value={email} onChange= {onChangeHandlerLogin}/>
            <input type="text" placeholder={"password"} value={password} onChange={onChangeHandlerPassword}/>
            <input type="checkBox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>

            <button onClick={() => register(email, password, rememberMe )} >login</button>

            <button onClick={logOut} >logOut</button>

            <Route path={"/login"}
                   render={() => <Login/>}/>


        </div>
    );
}