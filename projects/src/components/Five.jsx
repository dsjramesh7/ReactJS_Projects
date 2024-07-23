import React, { useState } from "react";

const Five = () => {
  const [istoggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle(!istoggle);
  };
  return (
    <div>
      <input type="checkbox" onChange={handleChange} />
      {istoggle ? "on" : "off"}
    </div>
  );
};

export default Five;
