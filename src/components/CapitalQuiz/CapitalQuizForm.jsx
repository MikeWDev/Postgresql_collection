import React, { useEffect, useRef, useState } from "react";
import CapitalQuizButton from "./CapitalQuizButton";
import { useFormState } from "react-dom";
import { submitCapitalAnswer } from "@/lib/actions";
const CapitalQuizForm = ({ initValue, setInitValue }) => {
  const [state, formAction] = useFormState(submitCapitalAnswer, undefined);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState("");
  const formRef = useRef();

  useEffect(() => {
    formRef.current?.reset();

    if (state?.succes === true) {
      setScore(score + 1);
    } else if (state?.succes === false) {
      setScore(0);
      setShake("false");
      setTimeout(() => {
        setShake("");
      }, 350);
    }
  }, [state]);
  return (
    <form
      ref={formRef}
      className={`quiz-container ${shake}`}
      action={formAction}
      id="capitalForm"
    >
      <div className="horizontal-container">
        <h3 className="total-score">
          Total Score: {score}
          <div id="score"></div>
        </h3>
      </div>
      <h3 id="countryName">
        {!state?.country ? state?.currentQuestion.country : state?.country}
      </h3>
      <div className="answer-container">
        <input
          className="answer-input"
          type="text"
          name="answer"
          id="userInput"
          placeholder="Enter the capital"
          autoComplete="off"
        />
      </div>
      <CapitalQuizButton initValue={initValue} setInitValue={setInitValue} />
      <p className={`${state?.succes}`}>{`${
        state?.succes === undefined ? " " : state.succes
      }`}</p>
    </form>
  );
};

export default CapitalQuizForm;
