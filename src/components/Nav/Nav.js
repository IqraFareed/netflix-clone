import React, { useEffect, useState } from "react";
import NavLogo from "../../image/netflix-logo.jpg";
import "./Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NavLogo} alt="Netflix logo" />
    </div>
  );
};
export default Nav;
