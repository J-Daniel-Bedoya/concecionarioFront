import React from "react";
import { useNavigate } from "react-router-dom";

const LogoNav = () => {
  //
  const navigate = useNavigate();

  return (
    <div
      className="navbar__container--logo"
      href="#home"
      onClick={() => navigate("/home")}
      style={{
        backgroundImage:
          "url(../../../src/assets/img/logo-car-minimal-svg.svg)",
      }}
    ></div>
  );
};

export default LogoNav;
