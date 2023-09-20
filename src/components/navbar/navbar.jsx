import LogoW from "./../../assets/LogoWhite.svg";
import LogoB from "./../../assets/Logo_BW.svg";

import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [listItemColor, setListItemColor] = useState(false);
  const [logoColor, setLogoColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 120) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  const changeListItemColor = () => {
    if (window.scrollY >= 120) {
      setListItemColor(true);
    } else {
      setListItemColor(false);
    }
  };
  const changeLogo = () => {
    if (window.scrollY >= 120) {
      setLogoColor(true);
    } else {
      setLogoColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("scroll", changeListItemColor);
  window.addEventListener("scroll", changeLogo);

  return (
    <>
      <div className={navColor ? "header header-bg" : "header"}>
        <div className="header-left">
          <a href="#">
            <img src={logoColor ? LogoB : LogoW} id="logo"></img>
          </a>
        </div>
        <div className="header-right">
          <ul id="navigation">
            <li>
              <Link
                activeClass="active"
                duration={600}
                to="hero-section"
                offset={-120}
                smooth={true}
                className={
                  listItemColor ? "list-item list-item-scroll" : "list-item"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                duration={600}
                to="about-section"
                offset={-50}
                smooth={true}
                className={
                  listItemColor ? "list-item list-item-scroll" : "list-item"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                duration={600}
                to="projects-section"
                offset={-120}
                smooth={true}
                className={
                  listItemColor ? "list-item list-item-scroll" : "list-item"
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                duration={600}
                to="contact-section"
                offset={-120}
                smooth={true}
                className={
                  listItemColor ? "list-item list-item-scroll" : "list-item"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
