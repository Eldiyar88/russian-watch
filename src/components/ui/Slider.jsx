/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

function SimpleSlider({ images, additionalSettings }) {
  const sliderStyle = {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  };

  return (
    <Container className="mx-auto my-5" style={sliderStyle}>
      <Carousel {...additionalSettings}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 img-fluid" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default SimpleSlider;
