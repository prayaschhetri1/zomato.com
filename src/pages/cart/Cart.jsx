import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux';

import SingleCart from './SingleCart';
import { getData } from './../../redux/appRedux/action';
import { useSelector } from 'react-redux';
import { appReducer } from './../../redux/appRedux/appReducer';

const Cart = () => {

const cartItem = useSelector((state) => state.appReducer.cartItem)
  return (
    <div>
        {
          cartItem && cartItem.map((item) => {
             return <SingleCart key={item.id} item={item} />
          })
        }
    </div>
  )
}

export default Cart