import React from 'react';

export default function WatchCard({ watches }) {
  console.log('---->', watches);
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <img src={watches.image} alt="img" style={{ width: '14.5rem' }} />
        <h5 className="card-title">{watches.name}</h5>
        <p className="card-text">{watches.type}</p>
      </div>
    </div>
  );
}
