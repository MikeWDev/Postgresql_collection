import { useState } from "react";
import CapitalQuizButton from "./capitalQuizButton";

const CapitalQuiz = ({ animation, setAnimation }) => {
  const [initValue, setInitValue] = useState("Start");

  const start = async () => {
    // const question = await nextQuestion();
  };
  return (
    <section>
      <div
        className={`capital-quiz-con  ${
          animation && animation === "g1" ? " " : "active"
        }`}
      >
        <form class="quiz-container">
          <div class="horizontal-container">
            <h3 className="total-score">
              Total Score:
              <div id="score"></div>
            </h3>
          </div>

          <h1 id="countryName"></h1>
          <div class="answer-container">
            <input
              className="answer-input"
              type="text"
              name="answer"
              id="userInput"
              placeholder="Enter the capital"
              autofocus
              autocomplete="off"
            />
          </div>
          <CapitalQuizButton
            initValue={initValue}
            setInitValue={setInitValue}
          />
        </form>
      </div>
    </section>
  );
};

export default CapitalQuiz;
