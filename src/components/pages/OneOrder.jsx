import React from 'react';

export default function OneDolphin({ order, deleteHandler }) {
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img src={order.photoURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{order.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
        <a href={`/dolphins/${order.id}`} className="btn btn-dark">
          See the order
        </a>

        <button className="btn btn-danger" type="button" onClick={() => deleteHandler(order.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
