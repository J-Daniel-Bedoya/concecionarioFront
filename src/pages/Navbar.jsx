import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsView } from "../store/slices/isView.slice";
import LogoNav from "../components/navbar/LogoNav";
import { Open, Clear } from "../components/navbar/Bars";
import FondoNav from "../components/navbar/FondoNav";
import Search from "../components/navbar/Search";
import { Profile, Register } from "../components/navbar/ButtonsNav";
import FiltersNav from "../components/navbar/FiltersNav";

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
        <LogoNav />
        <Open isBlock={isBlock} setIsBlock={setIsBlock} />
        <FondoNav isBlock={isBlock} setIsBlock={setIsBlock} />
        <div
          className={`navbar__container--nav ${
            isBlock
              ? "navbar__container--active"
              : "navbar__container--inActive"
          }`}
        >
          <Clear isBlock={isBlock} setIsBlock={setIsBlock} />
          <Search isBlock={isBlock} setIsBlock={setIsBlock} />
          <div className="buttons">
            <Register deploy={deploy} />
            <Profile deploy={deploy} isBlock={isBlock} />
          </div>
          <FiltersNav isBlock={isBlock} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
