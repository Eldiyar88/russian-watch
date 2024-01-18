/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  TextField, Button, Card, CardContent,
} from '@mui/material';
import axios from 'axios';

export default function IndexPage({user}) {
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/orders', Object.fromEntries(new FormData(e.target)));
      console.log(response);
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Card
      className="card mb-3 me-3"
      style={{
        width: '18rem',
        backgroundImage:
          'url("https://img.freepik.com/free-photo/watercolor-texture-background-light-gray-wallpaper_53876-104729.jpg?w=1800&t=st=1705586268~exp=1705586868~hmac=96ab239dbee02ddfd91e1c537bc76d1015888f8da1349ef651c8fce2c54171f1")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundOpacity: '80%',
      }}
    >
      <CardContent>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <TextField
              fullWidth
              label="Имя"
              name="name"
              variant="outlined"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="mb-3">
            <TextField
              fullWidth
              label="Электронная почта"
              name="email"
              type="email"
              variant="outlined"
              placeholder="Введите вашу почту"
            />
          </div>
          <div className="mb-3">
            <TextField
              fullWidth
              label="Ссылка на эскиз"
              name="picture"
              variant="outlined"
              placeholder="Вставьте ссылку на эскиз"
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            Оставить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
