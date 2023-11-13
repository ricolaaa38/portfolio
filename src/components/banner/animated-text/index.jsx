import React, { useEffect, useState } from 'react';
import './style/index.css';

function AnimatedBannerText() {
  const message = 'Nicolas Cretton.';
  const [titleContent, setTitleContent] = useState(' ');

  useEffect(() => {
    const arr = message.split('');
    const content = arr.map((char, index) =>
      char === ' ' ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span
          className="spanMessage"
          key={index}
          style={{
            animationDelay: `${calculateAnimationDelay(arr.length, index)}s`,
          }}
        >
          {char}
        </span>
      )
    );

    setTitleContent(content);
  }, []);

  const calculateAnimationDelay = (messageLength, index) => {
    const factor = 0.1;
    const fixedDelay = 0.1;
    return index === 0 ? fixedDelay : fixedDelay + index * factor;
  };

  return (
    <section className="animated-text">
      <span className="hi">Hi, I am </span>
      <div className="bonjour">
        <h1 className="title" id="titleIntro">
          {titleContent}
        </h1>
      </div>

      <div className="bonjour-intro">
        <p>
          Recently embarking on the exciting journey into web development, I am
          a passionate learner committed to transforming concepts into
          captivating digital landscapes.
        </p>
      </div>
    </section>
  );
}

export default AnimatedBannerText;
