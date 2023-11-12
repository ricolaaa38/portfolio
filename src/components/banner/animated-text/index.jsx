import React, { useEffect, useState } from 'react';
import './style/index.css';

function AnimatedBannerText() {
  const [titleContent, setTitleContent] = useState('');

  useEffect(() => {
    const message = 'Nicolas Cretton.';
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
    const factor = 0.05;
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
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
        </p>
      </div>
    </section>
  );
}

export default AnimatedBannerText;
