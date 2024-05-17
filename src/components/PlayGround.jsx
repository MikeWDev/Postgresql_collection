import Image from "next/image";
import React from "react";
import capitalQuiz from "/public/capital_quiz.png";
const PlayGround = ({ animation, setAnimation }) => {
  return (
    <section>
      <div
        className={` pg-container ${
          animation && animation === "pg"
            ? ""
            : animation === "g1"
            ? "active-left"
            : "active"
        }`}
      >
        <h1 className={animation && animation === "pg" ? "" : "active"}>
          PLAYGROUND
        </h1>
        <div className="img-con">
          <div className="game">
            <h2>Capital quiz</h2>
            <Image
              onClick={() => setAnimation("g1")}
              src={capitalQuiz}
              height={200}
            />
          </div>
          {/* <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div>
          <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PlayGround;
