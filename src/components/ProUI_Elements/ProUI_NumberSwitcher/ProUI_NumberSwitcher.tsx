// import { motion, AnimatePresence } from "framer-motion";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";

interface NumberSwitcherProps {
  targetNumber: number;
  increment?: number; // Increment step (optional, default: 1)
  duration?: number; // Duration in seconds (optional, default: 0.5)
  numUnit?: string;
}

const ProUI_NumberSwitcher: React.FC<NumberSwitcherProps> = ({
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
        display: "inline-block",
        overflow: "hidden",
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
            // style={{ position: "absolute", top: 0, left: 0 }}
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
        // className="ml-1"
        >
          {numUnit}
        </motion.span>
      )}
    </Box>
  );
};

export default ProUI_NumberSwitcher;


// import { motion, AnimatePresence } from "motion/react";
// import { useState, useEffect, useMemo } from "react";
// import Box from "@mui/material/Box";

// interface NumberSwitcherProps {
//   targetNumber: number;
//   totalDuration?: number; // total time to count up, in seconds
//   numUnit?: string;
// }

// const ProUI_NumberSwitcher: React.FC<NumberSwitcherProps> = ({
//   targetNumber,
//   totalDuration = 1.2,
//   numUnit = "k",
// }) => {
//   const [currentValue, setCurrentValue] = useState(0);
//   const [showNumUnit, setShowNumUnit] = useState(false);
//   const targetValue = Number(targetNumber);

//   // pick a step count/interval so it always finishes in ~totalDuration seconds
//   const steps = 30;
//   const stepTime = (totalDuration * 1000) / steps;
//   const increment = useMemo(() => Math.max(targetValue / steps, 0.01), [targetValue]);

//   useEffect(() => {
//     setCurrentValue(0);
//     setShowNumUnit(false);

//     const interval = setInterval(() => {
//       setCurrentValue((prev) => {
//         const next = prev + increment;
//         if (next >= targetValue) {
//           clearInterval(interval);
//           setShowNumUnit(true);
//           return targetValue;
//         }
//         return next;
//       });
//     }, stepTime);

//     return () => clearInterval(interval);
//   }, [targetValue, increment, stepTime]);

//   const displayValue = Number.isInteger(targetValue)
//     ? Math.round(currentValue)
//     : currentValue.toFixed(1);

//   const currentDigits = String(displayValue)
//     .padStart(String(targetValue).length, "0")
//     .split("");

//   return (
//     <Box
//       component="span"
//       sx={{ position: "relative", display: "inline-flex", alignItems: "center" }}
//     >
//       {currentDigits.map((digit, index) => (
//         <Box
//           component="span"
//           key={index}
//           sx={{
//             position: "relative",
//             display: "inline-block",
//             width: "0.65em",
//             height: "1.2em",
//             overflow: "hidden",
//           }}
//         >
//           <AnimatePresence mode="popLayout" initial={false}>
//             <motion.span
//               key={digit + index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               style={{ position: "absolute", top: 0, left: 0 }}
//             >
//               {digit}
//             </motion.span>
//           </AnimatePresence>
//         </Box>
//       ))}

//       {showNumUnit && (
//         <motion.span
//           initial={{ opacity: 0, x: 10 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3 }}
//           style={{ marginLeft: 4 }}
//         >
//           {numUnit}
//         </motion.span>
//       )}
//     </Box>
//   );
// };

// export default ProUI_NumberSwitcher;