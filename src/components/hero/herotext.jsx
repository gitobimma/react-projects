import { motion, useAnimationControls, stagger } from "framer-motion";
import { useState } from "react";

const HeroText = ({ children }) => {
  const control = useAnimationControls();
  const [isBouncing, setIsBouncing] = useState(false);

  const letterBounce = () => {
    control.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.5, 0.60, 1)",
        "scale3d(0.8, 1.3, 1)",
        "scale3d(1.25, 0.75, 1)",
        "scale3d(0.9, 1.1, 1)",
        "scale3d(1, 1, 1)",
      ],
    });

    setIsBouncing(true);
  };

  return (
    <motion.span
      animate={control}
      onMouseOver={() => {
        if (!isBouncing) {
          letterBounce();
        }
      }}
      onAnimationComplete={() => setIsBouncing(false)}
    >
      {children}
    </motion.span>
  );
};

export default HeroText;
