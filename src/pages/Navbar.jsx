import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div
          className="navbar__container--logo"
          href="#home"
          style={{
            backgroundImage:
              "url(../../../src/assets/img/logo-car-minimal-svg.svg)",
          }}
        ></div>
        <div className="navbar__container--nav">
          <form className="nav__search">
            <input type="search" placeholder="Search" aria-label="Search" />
            <button variant="outline-success">Buscar</button>
          </form>
          <div
            onClick={() => navigate("/home/register")}
            className="nav__register"
          >
            <button variant="outline-success">Nuevo Producto</button>
          </div>
          <div className="nav__cuenta">
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
