import React from "react";
/*items: [],
totalAmount: 0,

item represents that which item is being accessed and total amount is how many instances of that same item is added.
*/

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
