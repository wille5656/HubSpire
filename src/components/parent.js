import React, { useState, useEffect, useMemo } from "react";
import { makeVar, useReactiveVar } from '@apollo/client';
import { cartItemsVar } from './variables';
import Child from "./child";



const Parent = () => {
  // const cartItems= useReactiveVar(cartItemsVar)

  // console.log(cartItems);
  const [count, setCount] = useState(0)

  // function handleChange(newValue) {
  //   setCount(newValue);
  // }

  return (
    <div>

      <h1>This is the Parent page</h1>

      <Child value={count} onChange={setCount} />

      <h2>Value of Counter = {count}</h2>

    </div>
  );
}



export default Parent;