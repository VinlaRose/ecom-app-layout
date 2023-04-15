import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export function Cart(){
    const {cart} = useContext(CartContext);
    const {removeFrmCart} = useContext(CartContext);
    return(
        <div>
            <h2>{cart.length} items  in your cart</h2>
            <ul>
                {
                     cart.map((product) => {
                        const {id, name, description, price, category, quantity, brand} = product;
                        return (
                            <li key ={id}>
                                <h2>{name}</h2>
                                <h3>INR {price}</h3>
                                
                                <button onClick={()=>removeFrmCart(id)}>Remove from cart</button>
    
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}