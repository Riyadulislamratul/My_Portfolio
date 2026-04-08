import { motion } from "framer-motion";

const variants = {
  hidden: (direction) => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -60 };
      case "right":
        return { opacity: 0, x: 60 };
      case "zoom":
        return { opacity: 0, scale: 0.9 };
      case "down":
        return { opacity: 0, y: -60 };
      default:
        return { opacity: 0, y: 60 }; // up
    }
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Reveal = ({ children, direction = "up" }) => {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // 🔥 important fix
    >
      {children}
    </motion.div>
  );
};

export default Reveal;