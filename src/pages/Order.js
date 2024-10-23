import classes from "./Order.module.css";
import React from "react";
import Meals from "../components/OrderComp/Meals/Meals";
import HeaderCartButton from "../components/OrderComp/Cart/HeaderCartButton";
import CartProvider from "../store/CartProvider";
import { useState } from "react";
import Cart from "../components/OrderComp/Cart/Cart";
import OrderHead from "../components/OrderComp/Extras/OrderHead";
const Order = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHndler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <React.Fragment>
        <div className={classes.back}>
          <OrderHead />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <div className={classes.margin}>
            <HeaderCartButton onClickF2={showCartHndler} />
          </div>
          <main>
            <Meals />
          </main>
        </div>
      </React.Fragment>
    </CartProvider>
  );
};
export default Order;
