import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TimingDeadline = () => {
  const [deadline] = useState(new Date("Apr 20, 2024 23:59:59").getTime());
  const [timeLeft, setTimeLeft] = useState(null);
  const [message, setMessage] = useState("REGISTER BEFORE");
  const [registrationEnabled, setRegistrationEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = deadline - now;
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      if (t > 0) {
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        clearInterval(timer);
        setMessage("REGISTRATION CLOSED Please contact coordinators");
        setRegistrationEnabled(false); // Disable registration button/link
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div id="box" className="flex flex-col items-center justify-center p-4 text-white">
      <p id="text" className={`text-2xl font-bold text-center ${!registrationEnabled ? 'text-red-500' : ''}`}>
        {message}
      </p>
      {registrationEnabled && (
        <p id="time" className="text-4xl font-bold text-center">
          {timeLeft}
        </p>
      )}
      {registrationEnabled && (
        <Link
          to="/events"
          className={`rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none transition duration-100 focus-visible:ring md:text-base ${
            registrationEnabled
              ? "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!registrationEnabled}
        >
          Register Now
        </Link>
      )}
    </div>
  );
};

export default TimingDeadline;
