import React from "react";

const Open = ({ isBlock, setIsBlock }) => {
  return (
    <>
      {!isBlock && (
        <button
          className="navbar__container--bars"
          onClick={() => setIsBlock(!isBlock)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      )}
    </>
  );
};

// export default Open;

const Clear = ({ isBlock, setIsBlock }) => {
  return (
    <>
      {isBlock && (
        <button className="nav__inActive" onClick={() => setIsBlock(!isBlock)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      )}
    </>
  );
};

export { Open, Clear };
