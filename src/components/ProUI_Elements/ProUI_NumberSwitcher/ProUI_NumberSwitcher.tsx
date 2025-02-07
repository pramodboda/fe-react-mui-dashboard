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
}

const ProUI_NumberSwitcher: React.FC<NumberSwitcherProps> = ({
  // targetNumber,
  // duration = 0.5,
  targetNumber,
  increment = 1,
  duration = 0.5,
}) => {
  // const [currentNumber, setCurrentNumber] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentNumber((prev) =>
  //       prev < targetNumber ? prev + increment : targetNumber
  //     );
  //   }, duration * 1000);

  //   return () => clearInterval(interval);
  // }, [targetNumber, duration]);

  // return (
  //   <Box
  //     sx={{
  //       position: "relative",
  //       overflow: "overflow-hidden",
  //       height: 10,
  //       display: "inline-flex",
  //     }}
  //   >
  //     <AnimatePresence mode="popLayout">
  //       <motion.span
  //         key={currentNumber}
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         exit={{ opacity: 0, y: -20 }}
  //         transition={{ duration }}
  //         className="absolute"
  //       >
  //         {currentNumber}
  //       </motion.span>
  //     </AnimatePresence>
  //   </Box>
  // );

  const [currentValue, setCurrentValue] = useState(0);
  const targetValue = Number(targetNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prev) => {
        if (prev >= targetValue) {
          clearInterval(interval);
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
    </Box>
  );
};

export default ProUI_NumberSwitcher;
