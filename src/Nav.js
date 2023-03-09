import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "./Img/logo.png";
import avatar from "./Img/avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);
  // const history = useLocation();
  const navigate = useNavigate();

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
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src={logo}
          alt=""
        ></img>
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src={avatar}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
