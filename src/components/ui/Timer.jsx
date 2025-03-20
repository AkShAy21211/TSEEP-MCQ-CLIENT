import React, { useState, useEffect } from "react";
import clock from "../../assets/clock.png";

const Timer = ({ onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(30); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup on unmount
    } else {
      // Trigger auto-submit when time is up
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      className="bg-yellow-500 flex gap-2 px-4 py-2 rounded text-sm text-nowrap"
      aria-label="Timer"
    >
      <img src={clock} className="w-5 h-5" alt="timer" /> {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;