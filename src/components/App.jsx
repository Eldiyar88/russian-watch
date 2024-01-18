import React from 'react';
import Navbar from './ui/Navbar';
import SimpleSlider from './ui/Slider';

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
    <div className="container">
      <Navbar user={user} />

      <SimpleSlider images={images} additionalSettings={additionalSettings} />

      {children}
    </div>
  );
}
