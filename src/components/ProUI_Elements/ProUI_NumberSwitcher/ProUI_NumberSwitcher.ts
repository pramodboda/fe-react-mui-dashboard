// import { motion } from 'framer-motion';
import { motion } from "motion/react"
import { useState, useEffect } from 'react';

interface NumberSwitcherProps {
  value: number;
}

const ProUI_NumberSwitcher: React.FC<NumberSwitcherProps> = ({ value }) => {
  const [previousValue, setPreviousValue] = useState<number>(value);

  useEffect(() => {
    setPreviousValue(value);
  }, [value]);

  const generateNumberVariants = () => {
    return {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    };
  };

  return (
    <motion.div style={{ display: 'inline-block' }} key={value}>
      <motion.span
        key={previousValue}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={generateNumberVariants()}
        transition={{ duration: 0.5 }}
      >
        {previousValue}
      </motion.span>
      <motion.span
        key={value}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={generateNumberVariants()}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.span>
    </motion.div>
  );
};

export default ProUI_NumberSwitcher;
