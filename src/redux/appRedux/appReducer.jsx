import { GET_DATA } from "./actionType";

const initialState = {
  prod: [],
};

export const appReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_DATA: {
      return {
        ...state,
        prod: payload,
      };
    }
    default: {
      return state;
    }
  }
};
