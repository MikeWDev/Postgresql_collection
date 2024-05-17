"use client";
import "../scss/index.scss";
import { useState } from "react";
import HeroPage from "@/components/HeroPage";
import PlayGround from "@/components/PlayGround";
import CapitalQuiz from "@/components/CapitalQuiz/CapitalQuiz";
import NavElement from "@/components/NavElement";

export default function Home() {
  const [animation, setAnimation] = useState("home");
  return (
    <div className="container home">
      <HeroPage animation={animation} />
      <PlayGround setAnimation={setAnimation} animation={animation} />
      <CapitalQuiz animation={animation} setAnimation={setAnimation} />
      <div className="bar">
        <div className="nav-con">
          <NavElement setAnimation={setAnimation} animation={animation} />
        </div>
      </div>
    </div>
  );
}
