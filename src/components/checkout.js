import React from 'react';

function Checkout({ seatCount, totalPrice }) {
  return (
    <div className="container">

      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John wick - Chapter 1</td>
            <td>{seatCount}</td>
            <td>$7</td>
            <td>${totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Checkout;
