import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [variant, setVariant] = useState("default");
  const [isClicking, setIsClicking] = useState(false);
  const [theme, setTheme] = useState("dark");

  // ✅ Detect background (robust)
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

      el = el.parentElement;
    }

    return "light";
  };

  // Motion values
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

      // Magnetic effect
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set(centerX + (e.clientX - centerX) * 0.2);
        mouseY.set(centerY + (e.clientY - centerY) * 0.2);
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

  // Variants (NO blend mode → stable)
  const variants = {
    default: {
      scale: 1,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
    },
    hover: {
      scale: 1.8,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
    },
    text: {
      scale: 2.5,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
    },
   button: {
  scale: 2.8, // was 2 → now slightly bigger on button hover
  backgroundColor: theme === "dark" ? "#fff" : "#000",
},
  };

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-5000"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            theme === "dark"
              ? "0 0 0 2px rgba(255,255,255,0.4)"
              : "0 0 0 2px rgba(0,0,0,0.4)",
        }}
        animate={variants[variant]}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* FOLLOWER */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-4000"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.8 : 1,
          borderColor: theme === "dark" ? "#fff" : "#000",
          opacity: 0.6,
        }}
      />

      {/* CLICK PULSE */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-3000"
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