import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [variant, setVariant] = useState("default");
  const [isClicking, setIsClicking] = useState(false);
  const [theme, setTheme] = useState("dark"); // ✅ FIXED

  // Detect background
const detectBackground = (x, y) => {
  let el = document.elementFromPoint(x, y);

  while (el) {
    const bg = window.getComputedStyle(el).backgroundColor;

    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      const match = bg.match(/\d+/g);
      if (!match) return "dark";

      const [r, g, b] = match.map(Number);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      return brightness > 150 ? "light" : "dark";
    }

    el = el.parentElement; // 👈 move up
  }

  return "light"; // fallback (important!)
};

  // Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const cursorY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  const followerX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const followerY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const detected = detectBackground(e.clientX, e.clientY);
      setTheme(detected);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const elements = document.querySelectorAll(
      "a, button, .cursor-pointer, [data-cursor]"
    );

    const handleEnter = (el) => {
      const type = el.getAttribute("data-cursor") || "hover";
      setVariant(type);
    };

    const handleLeave = () => setVariant("default");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleEnter(el));
      el.addEventListener("mouseleave", handleLeave);

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        mouseX.set(x + (e.clientX - x) * 0.2);
        mouseY.set(y + (e.clientY - y) * 0.2);
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Variants
  const variants = {
    default: {
      scale: 1,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
      mixBlendMode: theme === "dark" ? "difference" : "normal",
    },
    hover: {
      scale: 1.8,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
      mixBlendMode: theme === "dark" ? "difference" : "normal",
    },
    text: {
      scale: 2.5,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
      mixBlendMode: theme === "dark" ? "difference" : "normal",
    },
    button: {
      scale: 2,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={variants[variant]}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Follower */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-40"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.8 : 1,
          borderColor: theme === "dark" ? "#fff" : "#000",
        }}
      />

      {/* Click Pulse */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-30"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
            borderColor: theme === "dark" ? "#fff" : "#000",
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </>
  );
};

export default Cursor;