import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ isLoading }) {
  const columns = Array.from({ length: 6 });
  const name = "RIYAD";

  // Grid timing
  const columnDelay = 0.12;
  const revealDuration = 0.7;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div className="fixed inset-0 z-[9999] overflow-hidden">

          {/* ✅ FULLSCREEN GRID */}
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
                  delay: i * columnDelay,
                }}
              />
            ))}
          </div>

          {/* ✅ PERFECT CENTER OVERLAY */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center pointer-events-none">
            <motion.h1
              className="
                flex
                items-center
                justify-center
                font-bold
                text-white
                select-none
                whitespace-nowrap
                leading-none
                text-center
              "
              style={{
                fontSize: "clamp(48px, 16vw, 220px)", // 🔥 scales perfectly
                letterSpacing: "clamp(0.08em, 0.12em, 0.15em)", // 🔥 responsive spacing
              }}
            >
              {name.split("").map((char, i) => (
                <span
                  key={i}
                  className="relative inline-flex items-center justify-center overflow-hidden"
                >
                  {/* Placeholder keeps exact spacing */}
                  <span className="opacity-0">{char}</span>

                  {/* Animated visible letter */}
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{
                      y: "100%",
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      y: "100%",
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: revealDuration,
                      delay: i * columnDelay,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}