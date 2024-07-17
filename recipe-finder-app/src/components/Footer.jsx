import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to={""}>
          <FaFacebook />
        </Link>
        <Link to={""}>
          <FaYoutube />
        </Link>
        <Link to={""}>
          <FaLinkedin />
        </Link>
        <Link to={""}>
          <RiInstagramFill />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
