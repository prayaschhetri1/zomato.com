import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Components/Filters";
import { getData } from "./../redux/appRedux/action";
import SingleItem from "./SingleItem";

const ProductCart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.appReducer.prod);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="main_container">
      <div>
        <Filters />
      </div>
      <div className="product_page">
        {data &&
          data.map((item) => {
            return <SingleItem key={item.id} item={item} />
          })}
      </div>
    </div>
  );
};

export default ProductCart;
