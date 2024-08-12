import React, { useState } from "react";
import "./Eighteen.css";
const Eighteen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <button className="menu-icon">
          <img
            src="https://img.icons8.com/?size=100&id=3096&format=png&color=000000"
            alt="hamburger menu"
            style={{ height: "24px" }}
            onClick={toggleMenu}
          />
        </button>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <h1 className="">decrease the screen size for magic</h1>
    </>
  );
};

export default Eighteen;
