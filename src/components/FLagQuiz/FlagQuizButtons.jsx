import React, { useState } from "react";

const FlagQuizButtons = () => {
  const [initState, setInitState] = useState("Start");
  return (
    <div className="flag-button-con">
      {initState && initState === "Start" ? (
        <button
          form="flagsForm"
          className="flag-button  green"
          type="submit"
          onClick={(e) => {
            setInitState("");
          }}
        >
          Start
        </button>
      ) : (
        <button form="flagsForm" className="flag-button" type="submit">
          Submit
        </button>
      )}
    </div>
  );
};

export default FlagQuizButtons;
