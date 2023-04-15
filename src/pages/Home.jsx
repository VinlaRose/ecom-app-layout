import React, { useContext } from "react";
import  { useEffect, useState} from "react";
import { CartContext } from "../Context/cartContext";




export function Home(){
   
    
   
    

 const {addToCartBtn} = useContext(CartContext);
 const {addToWishListBtn} = useContext(CartContext);
 
 const {items} = useContext(CartContext);

    return(
        <div>
            This is my home 
            <ul>
                {
                    items.map((product) => {
                        const {id, name, description, price, category, quantity, brand, isDisabled} = product;
                        return (
                            <li key ={id}>
                                <h2>{name}</h2>
                                <h3>INR {price}</h3>
                                <button onClick={()=>addToCartBtn(product)} disabled={isDisabled}>Add to Cart</button>
                                <button onClick={()=>addToWishListBtn(product)}>Add to Wishlist</button>
                               
    
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}