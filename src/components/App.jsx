import React from 'react';
import Navbar from './ui/Navbar';
import SimpleSlider from './ui/Slider';
import Greeting from './ui/Greetings';

export default function App({ children, user }) {
  const images = [
    'https://watch-planet.ru/upload/iblock/e2d/hg9csjfib8zkten21br3tncsi7ikj8xo/Frame_8.jpg',
    'https://watch-planet.ru/upload/iblock/7a5/Rotary.jpg',
    'https://watch-planet.ru/upload/iblock/17b/oe9z1yrg3r8l7c5vb1dzge4a8kq2rvtm/pilotage_lduchen.jpg',
    'https://watch-planet.ru/upload/iblock/174/Kosmos-1570X568.jpg'];

  const additionalSettings = {
    // Дополнительные настройки слайдера, если необходимо
  };

  return (
    <div className="Conntainer" style={{ backgroundImage: "url ('https://img.freepik.com/free-photo/watercolor-texture-background-light-gray-wallpaper_53876-104729.jpg?w=1800&t=st=1705586268~exp=1705586868~hmac=96ab239dbee02ddfd91e1c537bc76d1015888f8da1349ef651c8fce2c54171f1')" }}>
      <Navbar user={user} />
      <Greeting />
      <SimpleSlider images={images} additionalSettings={additionalSettings} />

      {children}
    </div>
  );
}
