import React from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

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
      <footer>
        <ul>
          <Link to={""} target="_blank">
            <AiFillLinkedin />
          </Link>
          <Link to={""} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={""} target="_blank">
            <FaGithubSquare />
          </Link>
          <Link to={""} target="_blank">
            <RiTwitterXLine />
          </Link>
        </ul>
        <a
          href="/Resume.pdf"
          className="download-btn"
          download="Resume.pdf"
        >[Download CV]</a>
      </footer>
    </section>
  );
};

export default Home;
