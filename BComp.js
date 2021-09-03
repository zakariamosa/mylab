import React, { useContext } from "react";
import XyzContext, { XyzProvider } from "./XyzContext";

function BComp() {
  const things = useContext(XyzContext);
  
    return <div>I am using Context {things}</div>;
  
}

export default BComp;