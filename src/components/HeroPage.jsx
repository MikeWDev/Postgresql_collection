import React from "react";
import Image from "next/image";
import elephant from "../../public/elephant.png";

const HeroPage = ({ animation }) => {
  return (
    <div className="home-container">
      <Image
        className={`${
          animation && animation !== "home" ? "active" : ""
        } elephant`}
        src={elephant}
        height={500}
        width={500}
      />
      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        THE
      </h1>

      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        Postgresql
      </h1>
      <span
        className={`${animation && animation !== "home" ? "active" : ""}`}
      ></span>
      <h1 className={`${animation && animation !== "home" ? "active" : ""}`}>
        app collection
      </h1>
      <div className="elipse" />
      <div className="elipse" />
    </div>
  );
};

export default HeroPage;
