import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [appRef, setAppRef] = useState(null);

  useEffect(() => {
    if (!appRef) return;

    const handleMouseMove = (e) => {
      const rect = appRef.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [appRef]);

  return { mousePosition, setAppRef };
};

export const useAutoCycle = (itemCount, intervalMs = 6000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemCount);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [itemCount, intervalMs]);

  return [activeIndex, setActiveIndex];
};
