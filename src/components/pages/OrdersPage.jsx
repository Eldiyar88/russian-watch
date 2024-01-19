import React from 'react';

export default function OrdersPage({ orders }) {
  console.log(JSON.stringify(orders), 'и тут работаетттттттттттттттттттт');
  return (
    <div className="container">
      <h1>Заказы</h1>
      <div className="row mt-3">{orders.map((order) => order.id)}</div>
    </div>
  );
}
