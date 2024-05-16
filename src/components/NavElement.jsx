import { HouseSimple, Joystick } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const NavElement = ({ setAnimation, animation }) => {
  return (
    <>
      <nav className="nav-container">
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
        </div>
      </nav>
    </>
  );
};

export default NavElement;
