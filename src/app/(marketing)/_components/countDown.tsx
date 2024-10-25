"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  deadline: Date;
}

const Countdown: React.FC<CountdownProps> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +deadline - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-[hsl(var(--lagos-cyan))] text-lg md:text-xl mb-4">
        Time Until Event
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full max-w-2xl">
        <CountdownBox value={timeLeft.days} label="Days" />
        <CountdownBox value={timeLeft.hours} label="Hours" />
        <CountdownBox value={timeLeft.minutes} label="Minutes" />
        <CountdownBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

interface CountdownBoxProps {
  value: number;
  label: string;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[hsl(var(--lagos-black)_/_0.6)] 
                    border border-[hsl(var(--lagos-cyan)_/_0.3)] rounded-lg p-3 md:p-4
                    backdrop-blur-sm hover:border-[hsl(var(--lagos-cyan)_/_0.6)] transition-all duration-300"
    >
      <div
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[hsl(var(--lagos-cyan))] 
                      to-[hsl(var(--lagos-neon))] bg-clip-text text-transparent"
      >
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs md:text-sm mt-1 text-[hsl(var(--lagos-white)_/_0.8)]">
        {label}
      </div>
    </div>
  );
};

export default Countdown;
