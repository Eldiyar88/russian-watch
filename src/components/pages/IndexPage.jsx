import React from 'react';
import axios from 'axios';

export default function IndexPage({user}) {
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/auth/signup',
        Object.fromEntries(new FormData(e.target)),
      );
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        alt="..."
        src="https://www.100suvenirov.ru/data/Image/catalog/436367-chasy-naruchnye-muzhskie_b.jpg"
      />
      <form onSubmit={submitHandler}>
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
        <button className="btn btn-danger" type="submit">
          Оставить заявку
        </button>
      </form>
    </div>
  );
}
