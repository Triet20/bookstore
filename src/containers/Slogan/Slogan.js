import React, { useState, useEffect } from 'react';
import './Slogan.css';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';

const Slogan = () => {
  const [imageIndex, setImageIndex] = useState(0);

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
      <div className="slider-container">
        <div className="myImages fade">
          <a href=""><img src={image1} alt="Image 1" loading="lazy"/></a>
          <div className="text"></div>
        </div>

        <div className="myImages fade">
          <a href=""><img src={image2} alt="Image 2" loading="lazy"/></a>
          <div className="text"></div>
        </div>

        <div className="myImages fade">
          <a href=""><img src={image3} alt="Image 3" loading="lazy"/></a>
          <div className="text"></div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => handleDotClick(0)}></span>
        <span className="dot" onClick={() => handleDotClick(1)}></span>
        <span className="dot" onClick={() => handleDotClick(2)}></span>
      </div>
    </div>
  );
};

export default Slogan;
