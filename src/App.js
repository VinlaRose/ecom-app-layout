
import './App.css';
import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";




import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { ProductDetails } from './pages/ProductDetails';


function App() {
  return (
    <div className="App">
     <h1>Welcome to my react app</h1>
     
     <nav>
      <NavLink to = "/home">Home</NavLink>| |
      <NavLink to = "/cart">Cart</NavLink>| |
      <NavLink to = "/wishlist">Wishlist</NavLink>
      
     </nav>




    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      
    </Routes>




    </div>
  );
}

export default App;
