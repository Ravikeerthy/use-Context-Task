import React from "react";

const Cardt = ({ totalPrice, totalQuantity }) => {
  return (
    <div>
      <h1>Total Quantity: {totalQuantity}</h1>
      <h1>Total Amount: {totalPrice}</h1>
    </div>
  );
};

export default Cardt;
