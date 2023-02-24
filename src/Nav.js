import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./Img/logo.png";
import avatar from "./Img/avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img className="nav_logo" src={logo} alt=""></img>
        <img className="nav_avatar" src={avatar} alt=""></img>
      </div>
    </div>
  );
}

export default Nav;
