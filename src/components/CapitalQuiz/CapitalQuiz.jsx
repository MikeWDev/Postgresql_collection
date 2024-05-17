import { useState } from "react";
import CapitalQuizForm from "./CapitalQuizForm";

const CapitalQuiz = ({ animation, setAnimation }) => {
  const [initValue, setInitValue] = useState("Start");

  return (
    <section>
      <div
        className={`capital-quiz-con  ${
          animation && animation === "g1 g" ? " " : "active"
        }`}
      >
        <CapitalQuizForm initValue={initValue} setInitValue={setInitValue} />
      </div>
    </section>
  );
};

export default CapitalQuiz;
