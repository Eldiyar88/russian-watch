import axios from 'axios';
import React from 'react';

export default function Navbar({ user }) {
  const logoutHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/api/auth/logout');
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ color: 'white' }}>
              Привет,
              {user ? user.username : 'гость'}
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Домой
              </a>
            </li>
            {!user ? (
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Войти
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/watches">
                    Часы
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logoutHandler}>
                    Выйти
                  </a>
                  <li className="nav-item">
                    {user.userName === 'admin'}
                    <a className="nav-link active" aria-current="page" href="/orders">
                      Заказы
                    </a>
                  </li>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
