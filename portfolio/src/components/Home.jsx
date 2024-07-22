import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";

const Home = ({ show, setShow }) => {
  return (
    <section className="page homePage">
      <Navbar show={show} />
      <TbGridDots
        className="hamburger"
        onClick={() => {
          setShow(!show);
        }}
      />
      <div className="banner">
        <h1>Ramesh</h1>
        <h1>D</h1>
        <p>Web Developer</p>
        <div className="btns">
          <Link to="/resume">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
