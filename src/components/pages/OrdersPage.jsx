import React from 'react';
import OneOrder from './OneOrder';

export default function OrdersPage({ orders }) {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="row d-flex justify-content-center">
        {orders?.map((el) => (
          <OneOrder key={el.id} order={el} />
        ))}
      </div>
    </div>
  );
}
