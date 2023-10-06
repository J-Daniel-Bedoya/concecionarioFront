import React from "react";

const FondoNav = ({ isBlock, setIsBlock }) => {
  return (
    <>
      {isBlock && (
        <div
          className="navbar__container--fondo"
          onClick={() => setIsBlock(!isBlock)}
        ></div>
      )}
    </>
  );
};

export default FondoNav;
