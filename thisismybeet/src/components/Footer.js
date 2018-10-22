import React from "react";
import "../App.css";
import Beet from "../images/Beet.png";

const Footer = () => {
  return (
    <div className="center">
      <img src={Beet} alt="beet" width="200" height="200" />
      <h1>
        <a
          href="https://github.com/acfromspace"
          target="_blank"
          rel="noopener noreferrer"
        >
          @acfromspace
        </a>
      </h1>
    </div>
  );
};

export default Footer;
