import React, { useState, useEffect } from "react";
import flowers from '../photos/flowers.png';
import './index.css'

export const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = { weekday: 'long', day: 'numeric' };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

  return (
    <div className="todo-head">
      <div className="flowers">
        <img src={flowers} alt="flowers" />
        <div className="date-time">
          <p className="p-date">{formattedDate}</p>
          <p>{currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </div>
    </div>
  );
};

