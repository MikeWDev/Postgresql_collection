import React from "react";
import FlagQuizForm from "./FlagQuizForm";

const FlagQuiz = ({ animation }) => {
  return (
    <section>
      <div className={`flag-container ${animation}`}>
        <FlagQuizForm />
      </div>
    </section>
  );
};

export default FlagQuiz;
