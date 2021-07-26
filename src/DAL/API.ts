import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://neko-back.herokuapp.com/2.0/"
})

export const loginAPI = {
    login (email: string, password: string, rememberMe: boolean) {
        return instance.post("auth/login",
            {
                email, password, rememberMe
        } )
    },

    logOut () {
        return instance.delete("auth/me")
    },

    me () {
        return instance.post ("auth/me")
    }
}