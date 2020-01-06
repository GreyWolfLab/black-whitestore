import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Link } from "react-browser-router";

import {cartLength} from '../compoennt/cartInit';

function SubNav() {

  const [cart, setCart] = useState(cartLength(JSON.parse(localStorage.getItem('cart'))));

  useEffect(() => {

    //setCart(cartLength(JSON.parse(localStorage.getItem('cart'))));

  });




  return (
    <BrowserRouter>
      <React.Fragment>
       
        <div className="p-2 w-full h-10 lg:h-16  flex items-center justify-center text-lg uppercase appearance-none">
            <Link to={"/"} className="w-1/5 lg:w-1/6 text-xs lg:text-lg appearance-none"></Link>
            <Link to={"/"} className="w-full flex text-xs lg:text-sm justify-center appearance-none">
          
            </Link>
            
            <Link to={"/cart"} className="w-1/5 lg:w-1/6 text-xs lg:text-sm flex justify-end appearance-none">cart({cart})</Link>

        </div>

        
      </React.Fragment>
    </BrowserRouter>
  );
}

export default SubNav;
