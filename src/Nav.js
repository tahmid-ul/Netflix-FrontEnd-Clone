import React from "react";
import "./Nav.css";
import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true); // when scrolled to 100px the black navbar appears
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }; /* Before firing off useeffect again remove the previous listener */
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
