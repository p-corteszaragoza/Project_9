import React from "react";

export default React.createContext({
  /*name: "",
    products: [],
    categories: [],*/
  cart: [],
  shoppingList: [],
  addProdToCart: (product) => {},
  addToShoppingList: (text) => {},
});
