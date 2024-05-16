import { HouseSimple, Joystick } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const NavElement = () => {
  return (
    <>
      <nav className="nav-container">
        <HouseSimple />
        <Joystick />
      </nav>
    </>
  );
};

export default NavElement;
