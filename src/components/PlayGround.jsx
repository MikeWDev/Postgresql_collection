import Image from "next/image";
import React from "react";
import capitalQuiz from "/public/capital_quiz.png";
import flagQuiz from "/public/flag_quiz.png";
import familyTracker from "/public/family-tracker.png";
const PlayGround = ({ animation, setAnimation }) => {
  return (
    <section>
      <div
        className={` pg-container ${
          animation && animation === "pg"
            ? ""
            : animation === "g1 g"
            ? "active-left"
            : animation === "g2 g"
            ? "active-right"
            : animation === "g3 g"
            ? "active-top"
            : animation === "home"
            ? "active"
            : ""
        }`}
      >
        <h1
          className={`playground ${
            animation && animation === "pg" ? "" : "active"
          }`}
        >
          PLAYGROUND
        </h1>
        <div className="img-con">
          <div className="game">
            <h2>Flag quiz</h2>
            <Image
              alt="Image of flag quiz app"
              onClick={() => setAnimation("g2 g")}
              src={flagQuiz}
              height={200}
              width={350}
            />
          </div>
          <div className="game">
            <h2>Capital quiz</h2>
            <Image
              alt="Image of capital quiz app"
              onClick={() => setAnimation("g1 g")}
              src={capitalQuiz}
              height={200}
              width={350}
            />
          </div>
          <div className="game">
            <h2>Family Tracker</h2>
            <Image
              alt="Image of family travel tracker app"
              onClick={() => setAnimation("g3 g")}
              src={familyTracker}
              height={200}
              width={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayGround;
