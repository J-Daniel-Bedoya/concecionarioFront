import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/home/Filter";
import { useDispatch, useSelector } from "react-redux";
import { setIsView } from "../store/slices/isView.slice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isView = useSelector((state) => state.isView);
  const [isBlock, setIsBlock] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsBlock(false);
        dispatch(setIsView(true));
      } else {
        dispatch(setIsView(false));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const deploy = (page) => {
    setIsBlock(false);
    navigate(`/home/${page}`);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div
          className="navbar__container--logo"
          href="#home"
          onClick={() => navigate("/home")}
          style={{
            backgroundImage:
              "url(../../../src/assets/img/logo-car-minimal-svg.svg)",
          }}
        ></div>

        {!isBlock && (
          <button
            className="navbar__container--bars"
            onClick={() => setIsBlock(!isBlock)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        )}

        {isBlock && (
          <div
            className="navbar__container--fondo"
            onClick={() => setIsBlock(!isBlock)}
          ></div>
        )}
        <div
          className={`navbar__container--nav ${
            isBlock
              ? "navbar__container--active"
              : "navbar__container--inActive"
          }`}
        >
          {isBlock && (
            <button
              className="nav__inActive"
              onClick={() => setIsBlock(!isBlock)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
          <form className="nav__search">
            <input type="search" placeholder="Search" aria-label="Search" />
            <button
              variant="outline-success"
              onClick={() => setIsBlock(!isBlock)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <button
            onClick={() => deploy("register")}
            className="nav__register"
            variant="outline-success"
          >
            <i className="fa-solid fa-circle-plus"></i>
            <span>Nuevo Producto</span>
          </button>

          <button className="nav__cuenta" onClick={() => deploy("profile")}>
            {!isBlock ? (
              <i class="fa-solid fa-user"></i>
            ) : (
              <div>
                <i class="fa-solid fa-user"></i>
                <span>Perfil</span>
              </div>
            )}
          </button>
          {isBlock && (
            <div className="navbar__container--filter">
              <Filter />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
