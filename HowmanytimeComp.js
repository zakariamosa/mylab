import React, { useContext } from "react";
import HowmanytimeContext, { HowmanytimeProvider } from "./HowmanytimeContext";

function HowmanytimeComp() {
  const things = useContext(HowmanytimeContext);
  return <div>{things.n}</div>;
}

export default HowmanytimeComp;
