import React from "react";

const NumberButton = (props) => {
  return (
    <button className = "numbers_button">
            
      {props.numberButton
      /* Display a button element rendering the data being passed down from the parent container on props */
      }
    </button>
  );
};

export default NumberButton;