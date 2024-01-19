import axios from 'axios';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faSignInAlt, faClock, faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

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
    <nav className="navbar navbar-expand-lg navbar-grey bg-grey opacity-25">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ color: 'white' }}>
              Привет,
              {user ? user.userName : 'гость'}
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <FontAwesomeIcon icon={faHome} />
                {' '}

              </a>
            </li>
            {!user ? (
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  {' '}

                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/watches">
                    <FontAwesomeIcon icon={faClock} />
                    {' '}
                    Часы
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={logoutHandler}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    {' '}
                    Выйти
                  </a>
                </li>
                {user.userName === 'admin' && (
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/orders">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                      {' '}
                      Заказы
                    </a>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
