import React from "react";

const Square = ({ value, OnSquareClick }) => {
  return (
    <button className="square" onClick={OnSquareClick}>
      {value}
    </button>
  );
};
export default Square;
