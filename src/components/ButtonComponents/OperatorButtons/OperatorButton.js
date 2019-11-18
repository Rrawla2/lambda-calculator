import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <button className="operator_button">
      {props.operator.char}
      {props.operator.value
      /* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;