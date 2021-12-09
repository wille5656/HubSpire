import React, { useState, useEffect, useMemo } from "react";
import { makeVar, useReactiveVar } from '@apollo/client';
import { cartItemsVar } from './variables';



function Child(props) {
    // const cartItems = useReactiveVar(cartItemsVar)
    // console.log(cartItems);
   
    
function handleChange(event) {
    
        props.onChange(event.target.value ++);
    }
  



    return (
        <div>

            <h2>This is the Child page</h2>
{/* 
            <button onClick={() => cartItemsVar(cartItems + 1)}> Increment </button> */}

           
            <button onClick={handleChange}>+</button>
        </div>
    );
}



export default Child;