"use client"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInSection;
