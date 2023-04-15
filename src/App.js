
import './App.css';
import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";




import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';


function App() {
  return (
    <div className="App">
     <h1>Welcome to my react app</h1>
     <nav>
      <NavLink to = "/">Home</NavLink>
      <NavLink to = "/cart">Cart</NavLink>
      <NavLink to = "/wishlist">Wishlist</NavLink>
      
     </nav>




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      
    </Routes>




    </div>
  );
}

export default App;
