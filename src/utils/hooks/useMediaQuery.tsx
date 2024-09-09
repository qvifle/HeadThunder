"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (sizeConstraint: "min" | "max", size: number) => {
  const [isMatch, setMatch] = useState<boolean | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const query = `(${sizeConstraint}-width: ${size}px)`;
    const breakPoint = window.matchMedia(query).matches;
    if (isMatch != breakPoint) {
      setMatch(breakPoint);
    }
  }, [windowWidth, isMatch, sizeConstraint, size]);

  return isMatch;
};

export default useMediaQuery;
