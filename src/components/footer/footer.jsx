import React from "react";
import "../footer/footer.css";
import linkedin from "../../assets/LinkedinOrange.svg";

export const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <img className="linkedin" src={linkedin} alt="linkedin-icon" />
        <p className="copyright">© 2023 Obimma . All Rights Reserved. </p>
      </div>
    </div>
  );
};
