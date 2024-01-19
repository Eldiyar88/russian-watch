/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  TextField, Button, Card, CardContent,
} from '@mui/material';
import axios from 'axios';
import WatchCard from '../ui/WatchCard';

const backgroundStyle = {
  backgroundImage: 'url("https://img.freepik.com/free-photo/watercolor-texture-background-light-gray-wallpaper_53876-104729.jpg?w=1800&t=st=1705586268~exp=1705586868~hmac=96ab239dbee02ddfd91e1c537bc76d1015888f8da1349ef651c8fce2c54171f1")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  padding: '1rem',
  borderRadius: '10px',
};

const inputStyle = {
  marginBottom: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '5px',
};


export default function IndexPage({ watches }) {

  const submitHandler = async (e) => {
    e.preventDefault();
    // const response = await axios.post('/', Object.fromEntries(new FormData(e.target)));

    try {
      const response = await axios.post('/orders/new', Object.fromEntries(new FormData(e.target)));


      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (

    <>
      <div className="row d-flex justify-content-center">
        {watches?.map((el) => <WatchCard key={el.id} watches={el} />)}
      </div>
      <div style={backgroundStyle}>
        <Card style={formStyle}>
          <CardContent>
            <form onSubmit={submitHandler}>
              <div style={inputStyle}>
                <TextField
                  fullWidth
                  label="Имя"
                  name="name"
                  variant="outlined"
                  placeholder="Введите ваше имя"
                  style={{ fontFamily: 'ваш_желаемый_шрифт' }}
                />
              </div>
              <div style={inputStyle}>
                <TextField
                  fullWidth
                  label="Электронная почта"
                  name="email"
                  type="email"
                  variant="outlined"
                  placeholder="Введите вашу почту"
                  style={{ fontFamily: 'ваш_желаемый_шрифт' }}
                />
              </div>
              <div style={inputStyle}>
                <TextField
                  fullWidth
                  label="Ссылка на эскиз"
                  name="photoURL"
                  variant="outlined"
                  placeholder="Вставьте ссылку на эскиз"
                  style={{ fontFamily: 'ваш_желаемый_шрифт' }}
                />
              </div>
              <Button variant="contained" color="secondary" type="submit" style={{ fontFamily: 'ваш_желаемый_шрифт' }}>
                Оставить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>

    <div style={backgroundStyle}>
      <Card style={formStyle}>
        <CardContent>
          <form onSubmit={submitHandler}>
            <div style={inputStyle}>
              <TextField
                fullWidth
                label="Имя"
                name="name"
                variant="outlined"
                placeholder="Введите ваше имя"
                style={{ fontFamily: 'ваш_желаемый_шрифт' }}
              />
            </div>
            <div style={inputStyle}>
              <TextField
                fullWidth
                label="Электронная почта"
                name="email"
                type="email"
                variant="outlined"
                placeholder="Введите вашу почту"
                style={{ fontFamily: 'ваш_желаемый_шрифт' }}
              />
            </div>
            <div style={inputStyle}>
              <TextField
                fullWidth
                label="Ссылка на эскиз"
                name="photoURL"
                variant="outlined"
                placeholder="Вставьте ссылку на эскиз"
                style={{ fontFamily: 'ваш_желаемый_шрифт' }}
              />
            </div>
            <Button variant="contained" color="secondary" type="submit" style={{ fontFamily: 'ваш_желаемый_шрифт' }}>
              Оставить заявку
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>

  );
}
