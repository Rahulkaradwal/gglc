"use client";
import { useState, useEffect } from "react";

interface RisingNumberProps {
  targetNumber: number; // The final number to count up to
  duration?: number; // Duration of the animation in milliseconds (optional)
}

const RisingNumber: React.FC<RisingNumberProps> = ({
  targetNumber,
  duration = 2000,
}) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1); // Normalize progress between 0 and 1
      setCurrentNumber(Math.floor(progress * targetNumber)); // Update the current number
      if (progress < 1) {
        requestAnimationFrame(step); // Continue the animation
      }
    };

    const animationFrame = requestAnimationFrame(step); // Start the animation

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, [targetNumber, duration]);

  // Format the number with commas (optional)
  const formattedNumber = new Intl.NumberFormat().format(currentNumber);

  return <span>{formattedNumber}</span>;
};

export default RisingNumber;
