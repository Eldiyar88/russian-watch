import React from 'react';

export default function OneOrder({ order }) {
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img src={order.photoURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{order.name}</h5>
        <p className="card-text">{order.email}</p>
        <a href={`/orders/${order.id}`} className="btn btn-dark">
          See the order
        </a>
      </div>
    </div>
  );
}
