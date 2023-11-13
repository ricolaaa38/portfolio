import React, { useEffect, useState } from 'react';
import './style/index.css';
import ImagePng from '../../../assets/gaspard.png';

function AnimatedBannerImage() {
  const [cloud1X, setCloud1X] = useState(0);
  const [cloud2X, setCloud2X] = useState(0);
  const [imageY, setImageY] = useState(0);
  const cloud1Speed = 0.1;
  const cloud2Speed = -0.1;
  const imageSpeedY = 0.05;

  useEffect(() => {
    const handleCloudTranslation = (event) => {
      const moveX = event.movementX;
      const moveY = event.movementY;
      const minX = -20;
      const maxX = 20;
      const minY = 0;
      const maxY = 20;
      setCloud1X((prevX) =>
        Math.max(minX, Math.min(prevX + moveX * cloud1Speed, maxX))
      );
      setCloud2X((prevX) =>
        Math.max(minX, Math.min(prevX + moveX * cloud2Speed, maxX))
      );
      setImageY((prevY) =>
        Math.max(minY, Math.min(prevY + moveY * imageSpeedY, maxY))
      );
    };

    const handleMouseMove = (event) => {
      requestAnimationFrame(() => {
        handleCloudTranslation(event);
      });
    };

    const animatedPictures = document.querySelector('.portfolio-banner');
    animatedPictures.addEventListener('mousemove', handleMouseMove);

    return () => {
      animatedPictures.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cloud1Speed, cloud2Speed, imageSpeedY]);

  return (
    <section className="animated-pictures">
      <div
        className="imageBanner"
        style={{ transform: `translateY(${imageY}px)` }}
      >
        <img src={ImagePng} alt="gaspard" />
      </div>
      <div
        className="cloud cloud1"
        style={{ transform: `translateX(${cloud1X}px)` }}
      >
        <div className="cloud-main"></div>
        <div className="cloud-center"></div>
        <div className="cloud-right"></div>
      </div>
      <div
        className="cloud cloud2"
        style={{ transform: `translateX(${cloud2X}px)` }}
      >
        <div className="cloud-main"></div>
        <div className="cloud-center"></div>
        <div className="cloud-right"></div>
      </div>
    </section>
  );
}

export default AnimatedBannerImage;
