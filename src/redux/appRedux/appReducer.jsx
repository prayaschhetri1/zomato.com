import { CART_ITEM, GET_DATA } from "./actionType";

const initialState = {
  prod: [],
  cartItem: []
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
    case CART_ITEM : {
      console.log(state)
      return {
        ...state,
       cartItem:[...state.cartItem,payload]
      }
    }
    default: {
      return state;
    }
  }
};
