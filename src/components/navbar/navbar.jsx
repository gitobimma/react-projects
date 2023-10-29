// import LogoW from "./LogoWhite.svg";
// import LogoB from "./../../assets/Logo_BW.svg";
import { DotsThreeOutline } from "phosphor-react";
import { Link } from "react-scroll";
import "./navbar.css";
import { useState } from "react";
import { useRef } from "react";
import { XCircle } from "phosphor-react";

export const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [listItemColor, setListItemColor] = useState(false);
  const [logoColor, setLogoColor] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  const navRef = useRef();
  const showNavigation = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("clicked");
  };

  const hideNavigation = () => {
    navRef.current.classList.remove("responsive_nav");
    console.log("clicked");
  };

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
  const changeMenuIcon = () => {
    if (window.scrollY >= 120) {
      setIconColor(true);
    } else {
      setIconColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("scroll", changeListItemColor);
  window.addEventListener("scroll", changeLogo);
  window.addEventListener("scroll", changeMenuIcon);

  return (
    <>
      <div className="headerContainer">
        <div className={navColor ? "header header-bg" : "header"}>
          <div className="header-left">
            <a href="#">
              <img
                src={logoColor ? "./Logo_BW.svg" : "./LogoWhite.svg"}
                id="logo"
              ></img>
            </a>
          </div>
          <div className="header-right">
            <ul ref={navRef} className="navigation">
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
                  onClick={hideNavigation}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  duration={600}
                  to="about-section"
                  offset={0}
                  smooth={true}
                  onClick={hideNavigation}
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
                  offset={0}
                  smooth={true}
                  onClick={hideNavigation}
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
                  offset={-80}
                  smooth={true}
                  onClick={hideNavigation}
                  className={
                    listItemColor ? "list-item list-item-scroll" : "list-item"
                  }
                >
                  Contact
                </Link>
              </li>
              <a
                className="mobile-menu-icon mobile-menu-close-icon"
                onClick={showNavigation}
              >
                <XCircle></XCircle>
              </a>
            </ul>
          </div>
          <a
            className={
              iconColor
                ? "mobile-menu-icon mobile-menu-icon-scroll"
                : "mobile-menu-icon"
            }
            onClick={showNavigation}
          >
            <DotsThreeOutline></DotsThreeOutline>
          </a>
        </div>
      </div>
    </>
  );
};
