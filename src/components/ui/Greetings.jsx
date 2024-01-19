import React from 'react';

function Greeting() {
  return (
    <div
      className="Hello"
      style={{
        color: 'black',
        backgroundImage: 'url("https://img.freepik.com/free-photo/watercolor-texture-background-light-gray-wallpaper_53876-104729.jpg?w=1800&t=st=1705586268~exp=1705586868~hmac=96ab239dbee02ddfd91e1c537bc76d1015888f8da1349ef651c8fce2c54171f1")',
        fontFamily: 'Arial',
        textAlign: 'center',
        padding: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px #888888',

      }}
    >
      <h3>
        Приветствую всех, меня зовут Юлия!
        И я - создательница уникальных часов ручной работы.
      </h3>
      <h5>
        С детства я увлекалась механизмами и мастерством работы с руками.
        Эти увлечения привели меня к идее создания настоящего произведения искусства
        - часов, которые сочетают в себе эстетику и надежность.
      </h5>
      <h5>
        Ниже вы можете ознакомиться с примерами моих работ.
      </h5>

    </div>

  );
}
export default Greeting;
