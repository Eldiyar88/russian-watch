import React from 'react';

export default function DolphinsPage({ orders }) {
  return (
    <div className="container">
      <h1>Заказы</h1>
      <div className="row mt-3">{orders.map((el) => el)}</div>
    </div>
  );
}
