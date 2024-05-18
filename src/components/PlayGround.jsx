import Image from "next/image";
import React from "react";
import capitalQuiz from "/public/capital_quiz.png";
import flagQuiz from "/public/flag_quiz.png";
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
            : animation === "home"
            ? "active"
            : ""
        }`}
      >
        <h1 className={animation && animation === "pg" ? "" : "active"}>
          PLAYGROUND
        </h1>
        <div className="img-con">
          <div className="game">
            <h2>Flag quiz</h2>
            <Image
              onClick={() => setAnimation("g2 g")}
              src={flagQuiz}
              height={200}
              width={350}
            />
          </div>
          <div className="game">
            <h2>Capital quiz</h2>
            <Image
              onClick={() => setAnimation("g1 g")}
              src={capitalQuiz}
              height={200}
              width={350}
            />
          </div>
          {/* <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PlayGround;
