import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export function Wishlist(){
    const {wishList} = useContext(CartContext);
    const {removefrmWishlist} = useContext(CartContext);
    return(
        <div>
            <h2>{wishList.length} items  in your wishList</h2>
            <ul>
                {
                     wishList.map((product) => {
                        const {id, name, description, price, category, quantity, brand} = product;
                        return (
                            <li key ={id}>
                                <h2>{name}</h2>
                                <h3>INR {price}</h3>
                                
                                <button onClick={()=>removefrmWishlist(id)}>Remove from wishList</button>
    
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}