import axios from "axios"
import { CART_ITEM, GET_DATA } from './actionType';


export const getData = (payload) => (dispatch) => {
    axios.get("http://localhost:8080/prods")
    .then((res) => {
        dispatch({type:GET_DATA,payload:res.data})
    })
    .catch((err) => {
        console.log(err)
    })
}

export const getCartItem = (payload) => {
    return {
        type: CART_ITEM,
        payload
    }
}