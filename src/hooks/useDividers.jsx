import { useState } from 'react';
import { dividers } from '../config/dividerConfig';

const useDividers = (initialDivider = 'triangle', initialColor = 'white') => {
  const [currentDivider, setCurrentDivider] = useState(initialDivider);
  const [isBlack, setIsBlack] = useState(initialColor === 'white');

  const getDivider = () => {
    const color = isBlack ? 'white' : 'white';
    return dividers[currentDivider][color];
  };

  // Toggle between white and white
  const toggleColor = () => {
    setIsBlack((prev) => !prev);
  };

  return { getDivider, setCurrentDivider, toggleColor };
};

export default useDividers;
