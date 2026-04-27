import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {
  const columns = Array.from({ length: 6 });
  const name = "RIYAD";

  const textVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">

          {/* ✅ NAME */}
          <motion.h1
            className="
              absolute 
              text-white 
              font-bold 
              flex 
              z-10 
              tracking-[0.15em]
              select-none
            "
            style={{
              fontSize: "clamp(60px, 18vw, 220px)", // 🔥 responsive magic
            }}
            variants={textVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* ✅ GRID */}
          <div className="absolute inset-0 grid grid-cols-6">
            {columns.map((_, i) => (
              <motion.div
                key={i}
                className="bg-brand"
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}