import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
        <AnimatedChar
          key={index}
          index={index}
          char={char}
          messageLength={arr.length}
        />
      )
    );

    setTitleContent(content);
  }, [message]);

  const AnimatedChar = ({ char, index, messageLength }) => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: calculateAnimationDelay(messageLength, index) * 500, // Convert seconds to milliseconds
    });

    return (
      <animated.span className="spanMessage" style={props}>
        {char}
      </animated.span>
    );
  };

  const calculateAnimationDelay = (messageLength, index) => {
    const factor = 0.1;
    const fixedDelay = 0.1;
    return index === 0 ? fixedDelay : fixedDelay + index * factor;
  };

  return (
    <section className="animated-text">
      <span className="hi">Bonjour, je suis </span>
      <div className="bonjour">
        <h1 className="titleBanner" id="titleIntro">
          {titleContent}
        </h1>
      </div>

      <div className="bonjour-intro">
        <p>Développeur web junior, front et back</p>
      </div>
    </section>
  );
}

export default AnimatedBannerText;
