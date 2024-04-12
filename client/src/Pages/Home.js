import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dgs5ufh6i/image/upload/v1712101788/Welcome_Homes_Logo_jiqaii.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>WELCOME</h5>
          <p>HELLO WORLD</p>
        </Carousel.Caption>
      </Carousel.Item>  
    </Carousel>
  </div>
  )
}

export default Home