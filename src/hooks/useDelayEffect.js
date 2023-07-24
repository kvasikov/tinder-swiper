import { useState, useEffect } from 'react';

export const useDelayEffect = ({ dependencyFlag, delay = 250 }) => {
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    if (dependencyFlag) {
      setIsDelay(true);
    } else {
      setTimeout(() => {
        setIsDelay(false);
      }, delay);
    }
  }, [dependencyFlag, delay]);

  return [isDelay];
};
