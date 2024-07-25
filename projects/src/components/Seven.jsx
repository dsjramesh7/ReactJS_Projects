import React, { useEffect, useState } from "react";

const Seven = () => {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    if (timer > 0) {
      const countDown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countDown);
    }
  }, [timer]);
  return <div>CountDown: {timer}</div>;
};

export default Seven;
