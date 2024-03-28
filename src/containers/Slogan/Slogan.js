import React, { useState, useEffect } from 'react';
import './Slogan.css';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';

const Slogan = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    image1,
    image2,
    image3
  ];

  useEffect(() => {
    const showImages = () => {
      const images = document.getElementsByClassName('myImages');
      const dots = document.getElementsByClassName('dot');

      for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }

      setImageIndex((prevIndex) => (prevIndex % images.length) + 1);

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      const targetImageIndex = imageIndex - 1;
      if (images[targetImageIndex]) {
        images[targetImageIndex].style.display = 'block';
        dots[targetImageIndex].className += ' active';
      }
    };

    const intervalId = setInterval(showImages, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [imageIndex]);

  const handleDotClick = (index) => {
    setImageIndex(index + 1);
  };

  return (
    <div>
  <div>
    <div className="slider-container">
      {images.map((image, index) => (
        <div key={index} className="myImages fade">
          <img src={image} alt={`Image ${index + 1}`} loading="lazy" />
          <div className="text"></div>
        </div>
      ))}
    </div>
  </div>
      <br />

      <div style={{ textAlign: 'center' }}>
    {images.map((image, index) => (
    <span
      key={index}
      className="dot"
      onClick={() => handleDotClick(index)}
    ></span>
  ))}
</div>
    </div>
  );
};

export default Slogan;
