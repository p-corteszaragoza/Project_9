import React, { Component } from 'react';
import "./cart.css"
import storeContext from '../context/storeContext';

import ItemInCart from "./itemInCart";
/**
 * In cart component
 * 
 * connect to the context
 * 
 * get the cart(array) from the context
 * map the array into string(x.title)
 * 
 * **/

class Cart extends Component {
    static contextType = storeContext;

    state = {};

    render() {
        return (
            <div className="cart-page">
                <h3> Cart Page</h3>
                <div >{this.context.cart.map((prod) =>
                    <ItemInCart key={prod._id} prod={prod}></ItemInCart>)} </div>
            </div>

        );
    }
}

export default Cart;