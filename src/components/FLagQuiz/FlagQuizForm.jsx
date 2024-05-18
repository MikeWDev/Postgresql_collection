import React, { useEffect } from "react";
import FlagQuizButtons from "./FlagQuizButtons";
import { SubmitFlagsAnswer } from "@/lib/actions";
import { useFormState } from "react-dom";
const FlagQuizForm = () => {
  const [state, formFlagAction] = useFormState(SubmitFlagsAnswer, undefined);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <form id="flagsForm" className="flag-form" action={formFlagAction}>
      <div className="horizontal-flag-container">
        <h3 className="total-flag-score-heading">
          Total Score:
          <span className="total-flag-score" id="score">
            "0"
          </span>
        </h3>
      </div>
      <div className="">
        <h1 className="country-flag" id="countryFlag">
          {/* {state} */}
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
    </form>
  );
};

export default FlagQuizForm;
