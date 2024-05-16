"use client";
import "../scss/index.scss";

import NavElement from "@/components/navElement";
import { useState } from "react";
import HeroPage from "@/components/HeroPage";
import PlayGround from "@/components/PlayGround";

export default function Home() {
  const [animation, setAnimation] = useState("home");
  return (
    <div className="container home">
      <HeroPage animation={animation} />
      <PlayGround animation={animation} />
      <div className="bar">
        <div className="nav-con">
          <NavElement setAnimation={setAnimation} animation={animation} />
        </div>
      </div>
    </div>
  );
}
