import React from "react";
import "../footer/footer.css";
import { Link } from "react-router-dom";
// import linkedin from "../../assets/LinkedinOrange.svg";

export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <Link to="https://www.linkedin.com/in/igor-obimma-489a8527a/">
          <img
            className="linkedin"
            src="./LinkedinOrange.svg"
            alt="linkedin-icon"
          />
        </Link>
        <p className="copyright">© 2023 Obimma . All Rights Reserved. </p>
      </div>
    </div>
  );
};
