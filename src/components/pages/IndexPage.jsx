import React from 'react';

export default function IndexPage() {
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        alt="..."
        src="https://www.100suvenirov.ru/data/Image/catalog/436367-chasy-naruchnye-muzhskie_b.jpg"
      />
      <form>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="имя"
        />
        <input
          name="email"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="электронная почта"
        />
        <input
          name="picture"
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ссылка на экскиз"
        />
        <button className="btn btn-danger" type="button">
          Оставить заявку
        </button>
      </form>
    </div>
  );
}
