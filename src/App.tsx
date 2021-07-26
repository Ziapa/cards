import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import {Login} from './commponents/Login/Login';
import {NavBar} from "./commponents/NavBar/NavBar";
import { Profile } from './commponents/Profile/Profile';
import {Registration} from "./commponents/Registration/Registration";
import { SetPassword } from './commponents/SetPassword/SetPassword';
import {ForgotPassword} from "./commponents/ForgotPassword/ForgotPassword";

function App() {
    return (
        <div>
            <div>

                <NavBar/>

                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={"/registration"} render={() => <Registration/>}/>
                    <Route path={"/setPassword"} render={() => <SetPassword/>}/>
                    <Route path={"/forgotPassword"} render={() => <ForgotPassword/>}/>
                    <Route path={"/profile"} render={() => <Profile/>}/>
            </div>
        </div>
    )

}

export default App;
