import React, { useState, useEffect } from "react";

const RegisterButton = () => {
  const [deadline, setDeadline] = useState(new Date("Apr 23, 2024 23:59:59").getTime());
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
        setMessage("REGISTRATION CLOSED");
        setRegistrationEnabled(false); // Disable registration button
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const handleClick = () => {
    if (!registrationEnabled) {
      alert("Please contact the coordinators");
    }
  };

  return (
    <div id="box" className="flex flex-col items-center justify-center p-4 text-white">
      {registrationEnabled && (
        <p id="text" className="text-2xl font-bold text-center">
          {message}
        </p>
      )}
      <button
        onClick={handleClick}
        className={`rounded-lg px-8 py-3 text-center text-sm font-semibold outline-none transition duration-100 focus-visible:ring md:text-base ${
          registrationEnabled
            ? "bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!registrationEnabled}
      >
        Register Now
      </button>
      {!registrationEnabled && (
        <div className="text-center mt-2 text-xl text-red-500">NOTE : Please contact the coordinators</div>
      )}
    </div>
  );
};

export default RegisterButton;
