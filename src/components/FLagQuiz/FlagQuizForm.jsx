import React, { useEffect, useState } from "react";
import FlagQuizButtons from "./FlagQuizButtons";
import { SubmitFlagsAnswer } from "@/lib/actions";
import { useFormState } from "react-dom";
const FlagQuizForm = () => {
  const [state, formFlagAction] = useFormState(SubmitFlagsAnswer, undefined);
  const [shake, setShake] = useState("");
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState("");
  useEffect(() => {
    console.log(state);
    if (state?.succes === true) {
      setScore(score + 1);
      setVisible("visible");
      setTimeout(() => {
        setVisible("");
      }, 1000);
    } else if (state?.succes === false) {
      setScore(0);
      setShake("false");
      setVisible("visible");
      setTimeout(() => {
        setVisible("");
      }, 1000);
      setTimeout(() => {
        setShake("");
      }, 350);
    }
  }, [state]);
  return (
    <form
      id="flagsForm"
      className={`flag-form ${shake}`}
      action={formFlagAction}
    >
      <div className="horizontal-flag-container">
        <h3 className="total-flag-score-heading">
          Total Score:
          <span className="total-flag-score" id="score">
            {score}
          </span>
        </h3>
      </div>
      <div className="">
        <h1 className="country-flag" id="countryFlag">
          {state && !state?.flag
            ? state?.currentFlagQuestion.flag
            : state?.flag}
        </h1>
      </div>
      <div className="answer-container">
        <input
          className="flag-input"
          type="text"
          name="answer"
          id="userInput"
          placeholder="Name the country"
          autoComplete="off"
        />
      </div>
      <FlagQuizButtons />
      <p className={`${state?.succes} ${visible}`}>
        {`${state?.succes === undefined ? " " : state?.succes}`}
      </p>
    </form>
  );
};

export default FlagQuizForm;
