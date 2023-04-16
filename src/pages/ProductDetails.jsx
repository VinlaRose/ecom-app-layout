import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import {Link} from "react-router-dom";



export function ProductDetails(){
    const {items} = useContext(CartContext);
    const {productId} = useParams();

    console.log(items);
    console.log(productId);

    
    const newItems = items.filter(({id}) => id === parseInt(productId) );
   
    return(
        <div>
            <h1>Details</h1>
            <ul>
                {
                    newItems.map(({id, name, description, price, category, quantity, brand}) => {
                        
                        return (
                            <li key ={id}>
                                <h2>{name}</h2>
                                <h3>INR {price}</h3>
                                <p>{description}</p>
                                <p>Category: {category}</p>
                                <p>Brand: {brand}</p>
                               
    
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}