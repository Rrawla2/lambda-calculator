import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <button className="special_button">
      {props.specialButton
        /* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;
