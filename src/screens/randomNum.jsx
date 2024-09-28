import React, { useState } from 'react';

const images = [
  '1.png', // Image for number 0
  '2.png', // Image for number 1
  '3.png', // Image for number 2
  '4.png', // Image for number 3
  '5.png', // Image for number 4
  '6.png', // Image for number 5
  '7.png', // Image for number 6
  '8.png', // Image for number 7
  '9.png', // Image for number 8
  '10.png', // Image for number 9
  '11.png', // Image for number 10
  // Add more images as needed
];

const RandomNumberImageGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * images.length);
    setRandomNumber(number);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Random Number Image Generator</h1>
      <button onClick={generateRandomNumber}>Generate Number</button>
      {randomNumber !== null && (
        <div>
          <p>Generated Number: {randomNumber}</p>
          <img
            src={images[randomNumber]}
            alt={`Image for number ${randomNumber}`}
            style={{ maxWidth: '200px', marginTop: '20px' }}
          />
        </div>
      )}
    </div>
  );
};

export default RandomNumberImageGenerator;
