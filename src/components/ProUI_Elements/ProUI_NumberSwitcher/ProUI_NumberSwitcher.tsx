// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
interface NumberSwitcherProps {
  // targetNumber: number;
  // duration?: number; // Duration in seconds (optional, default: 0.5)

  targetNumber: number;
  increment?: number; // Increment step (optional, default: 1)
  duration?: number; // Duration in seconds (optional, default: 0.5)
  numUnit?: string;
}

const ProUI_NumberSwitcher: React.FC<NumberSwitcherProps> = ({
  // targetNumber,
  // duration = 0.5,
  targetNumber,
  increment = 1,
  duration = 0.5,
  numUnit = "k",
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [showNumUnit, setShowNumUnit] = useState(false);
  const targetValue = Number(targetNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => {
        if (prev >= targetValue) {
          clearInterval(interval);
          setShowNumUnit(true);
          return targetValue;
        }

        let nextValue = prev + increment;
        if (nextValue > targetValue) nextValue = targetValue;
        return nextValue;
      });
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [targetValue, increment, duration]);

  const currentDigits = String(currentValue)
    .padStart(String(targetValue).length, "0")
    .split("");
  // const targetDigits = String(targetValue).split("");

  return (
    <Box
      component="span"
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {currentDigits.map((digit, index) => (
        <span key={index}>
          <AnimatePresence mode="popLayout">
            <motion.span
              key={digit + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration }}
              className="absolute"
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}

      {showNumUnit && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-1"
        >
          {numUnit}
        </motion.span>
      )}
    </Box>
  );
};

export default ProUI_NumberSwitcher;
