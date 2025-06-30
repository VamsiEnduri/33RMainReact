import React, { useContext } from "react";
import { Context } from "./App";
import Abc from "./Abc";
const CounterBtbn = () => {
  const a = useContext(Context);
  console.log(a);
  return (
    <div className="btn">
      <Abc />
    </div>
  );
};

export default CounterBtbn;
