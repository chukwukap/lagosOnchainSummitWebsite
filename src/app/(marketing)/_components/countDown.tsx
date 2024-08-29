"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  deadline: Date;
}

const Countdown: React.FC<CountdownProps> = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +deadline - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
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

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex space-x-4">
      <CountdownBox value={timeLeft.days} label="DAYS" />
      <CountdownBox value={timeLeft.hours} label="HOURS" />
      <CountdownBox value={timeLeft.minutes} label="MINUTES" />
    </div>
  );
};

interface CountdownBoxProps {
  value: number;
  label: string;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black text-white text-4xl font-bold py-2 px-4 rounded">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs mt-1">{label}</div>
    </div>
  );
};

export default Countdown;
