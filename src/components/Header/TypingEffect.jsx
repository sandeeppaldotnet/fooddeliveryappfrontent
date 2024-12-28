import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({text}) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText =text; //"Welcome, To foody : Order your favorite dishes";
  const typingSpeed = 150; // milliseconds between each character
  const indexRef = useRef(0); // Track the index without re-rendering

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentIndex = indexRef.current;

      // If we're still within the text length
      if (currentIndex < fullText.length) {
        // Add the next character to displayedText
        setDisplayedText((prevText) => prevText + fullText[currentIndex]);

        // Update the index without triggering a re-render
        indexRef.current = currentIndex + 1;
      } else {
        clearInterval(typingInterval); // Stop when all characters are typed
      }
    }, typingSpeed);

    // Cleanup interval when component unmounts
    return () => clearInterval(typingInterval);
  }, []); // Empty dependency array, runs only once

  return (
    <div>
      <h2 className='blinking-text'>{displayedText}</h2>
    </div>
  );
};

export default TypingEffect;
