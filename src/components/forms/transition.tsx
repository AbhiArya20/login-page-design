import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3 },
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
