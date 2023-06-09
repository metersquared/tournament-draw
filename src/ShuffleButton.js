import { useRef, useEffect } from "react";

import { motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import combineArrays from "./helper";

function ShuffleButton(props) {
  const { onClick } = props;
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        scale: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="shuffle-button"
      onClick={onClick}
    >
      <p>Mulai draw</p>
    </motion.div>
  );
}

export default ShuffleButton;
