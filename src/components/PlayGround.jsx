import Image from "next/image";
import React from "react";
import fm from "../../public/family-tracker.png";
const PlayGround = ({ animation }) => {
  return (
    <section>
      <div
        className={` pg-container ${
          animation && animation === "pg" ? "" : "active"
        }`}
      >
        <h1 className={animation && animation === "pg" ? "" : "active"}>
          PLAYGROUND
        </h1>
        <div className="img-con">
          <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div>
          <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div>
          <div className="game">
            <h2>Title</h2>
            <Image src={fm} height={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayGround;
