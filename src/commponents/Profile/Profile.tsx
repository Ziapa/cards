import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {InitialStateProfileType} from "../../redux/profileReducer";
import {logOutTC, meTC} from "../../redux/loginReducer";

export const Profile = () => {

    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(meTC())
    }, [dispatch])

    const profile = useSelector<AppStateType, InitialStateProfileType>((state => state.profile))

    const logOut = () => {
        dispatch(logOutTC)
    }

    return (
        <div>
            {profile.name}
            <button onClick={logOut}> LogOut</button>
        </div>
    )
}