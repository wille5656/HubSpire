import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { makeVar, useReactiveVar } from '@apollo/client';
import { cartItemsVar } from './variables';



const Reactive = () => {





  const cartItems = useReactiveVar(cartItemsVar)








  console.log(cartItems);


  return (
    <div>

      <h2>Value of Counter = {cartItems}</h2>

      <button onClick={() => cartItemsVar(cartItems + 1)}> Increment </button>

    </div>
  );
}



export default Reactive;