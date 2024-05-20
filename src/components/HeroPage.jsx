import React from "react";

const HeroPage = ({ animation }) => {
  return (
    <div className="home-container">
      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        THE
      </h1>

      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        Postgresql
      </h1>
      <div
        className={` box${animation && animation !== "home" ? "active" : ""}`}
      ></div>
      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        app collection
      </h1>
    </div>
  );
};

export default HeroPage;
