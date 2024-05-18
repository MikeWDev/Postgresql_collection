import React, { useState } from "react";

const FlagQuizButtons = () => {
  const [initState, setInitState] = useState("Start");
  return (
    <div className="flag-button-con">
      <button
        onClick={() => setInitState("")}
        form="flagsForm"
        className={`flag-button ${initState === "Start" ? "green" : " "}  `}
        type="submit"
      >
        {initState === "Start" ? "Start" : "Submit"}
      </button>
    </div>
  );
};

export default FlagQuizButtons;
