import {
  Button,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const Filters = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Filters
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        style={{ width: "320px" }}
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <div className="checkCateg">
              <h5>Choose from Categories</h5>

              <form action="">
                <div className="check_boxes">
                  <input type="checkbox" />
                  <label htmlFor="">Jwellary</label>
                </div>
                <div className="check_boxes">
                  <input type="checkbox" />
                  <label htmlFor="">Shoes</label>
                </div>
                <div className="check_boxes">
                  <input type="checkbox" />
                  <label htmlFor="">Jackets</label>
                </div>
              </form>
            </div>

            <div className="checkCateg" style={{marginTop:"50px"}}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  
                </FormLabel>
                <h5>Choose from Gender</h5>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
