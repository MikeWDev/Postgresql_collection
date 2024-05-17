import { ArrowUUpLeft } from "@phosphor-icons/react";
import { HouseSimple, Joystick } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const NavElement = ({ setAnimation, animation }) => {
  return (
    <>
      <nav className={`nav-container ${animation}`}>
        <div className="nav-anchor">
          <div className={`span ${animation}`}></div>
          <HouseSimple
            onClick={() => {
              setAnimation("home");
            }}
          />
          <Joystick
            onClick={() => {
              setAnimation("pg");
            }}
          />
          <ArrowUUpLeft
            className={`back-arrow ${animation} `}
            onClick={() => {
              setAnimation("pg");
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default NavElement;
