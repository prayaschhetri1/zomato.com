import React from 'react'
import { Button } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const SingleItem = ({item}) => {
  return (
    <>
    <div className="card main_single_item">
  <img src={item.image} height="300" className="card-img-top" alt="..."/>

  <div className="card-body">
    <h4 className="card-title">{item.title}</h4>
    <h5 className="card-title">{item.category}</h5>
    <h6 className="card-title">₹ {item.price}</h6>
    <p className="card-text">{item.description}</p>
    <Button variant="contained" startIcon={<AddShoppingCartIcon/>} >
    
  Add to Cart
</Button>
  </div>
</div>

</>
  )
}

export default SingleItem