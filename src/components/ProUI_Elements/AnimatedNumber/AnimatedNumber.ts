import React, { useState, useEffect } from 'react';
import { motion, spring } from "motion/react"

interface AnimatedNumberProps {
  targetNumber: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ targetNumber }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(targetNumber);

  useEffect(() => {
    setCurrentNumber(targetNumber);
  }, [targetNumber]);

  return (
    <div style={{ position: 'relative', height: '1em', overflow: 'hidden' }}>
      <motion
        style={{
          y: spring(currentNumber, { stiffness: 120, damping: 14 }),
        }}
      >
        {({ y }) => (
          <div
            style={{
              position: 'absolute',
              transform: `translateY(${y * -100}%)`,
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            {targetNumber}
          </div>
        )}
      </motion>
    </div>
  );
};

export default AnimatedNumber;