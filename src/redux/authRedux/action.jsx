import { SIGNUP_SUCCESS } from "./actionType"


export const signUpInfo = (paylaod) => {
    return {
        type: SIGNUP_SUCCESS,
        paylaod
    }
}

