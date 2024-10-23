import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
//import m5 from "../../../../pictures/menu-thumb-5.jpg";
//import m5 from "../../../../../public/images/menu-thumb-5.jpg";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <figure>
          <img src={props.path} alt="FOOD" className={classes.gloimg} />
        </figure>
      </div>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <h3>{props.category}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;

/*

<div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
      */
