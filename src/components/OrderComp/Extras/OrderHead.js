import React from "react";
import classes from "./OrderHead.module.css";
const OrderHead = () => {
  return (
    <section>
      <div className={classes.heading}>
        <div className={classes.set}>
          <h1>Restaurant Food</h1>
          <h3>Menu</h3>
        </div>
      </div>
    </section>
  );
};
export default OrderHead;
