export type ProfileACType =
    |SetProfileACType


export type SetProfileACType = ReturnType<typeof setProfileAC>

export type InitialStateProfileType = typeof initialState

let initialState = {

    _id: "",
    email: "",
    name: "",
    avatar: "",
    publicCardPacksCount: 1,  // количество колод

    created: "",
    updated: "",
    isAdmin: false,
    verified: false,// подтвердил ли почту
    rememberMe: false,

    error: ""
}


export const profileReducer = (state: InitialStateProfileType = initialState, action : ProfileACType) => {
    switch (action.type) {
        case "SET_PROFILE" :
            return {...action.payload}

        default:
            return state
    }
}

// ActionCreators

export const setProfileAC = (payload: InitialStateProfileType) => ({type: "SET_PROFILE", payload}) as const

// THUNKCreators