import React, { useState } from "react";

const Two = () => {
  const [count, setCount] = useState(0);

  const decrementFunc = () => {
    if (count === 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  };

  const incrementFunc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={decrementFunc}>-</button>
        <button onClick={incrementFunc}>+</button>
      </div>
    </div>
  );
};

export default Two;
