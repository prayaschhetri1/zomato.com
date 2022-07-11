import { SIGNUP_SUCCESS } from "./actionType";
const initialState = {
  isAuth: false,
  signUpDetails: {},
  token: "",
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS: {
       
      return {
        ...state,
        signUpDetails:  payload,
      };
    }

    default: {
      return state;
    }
  }
};
