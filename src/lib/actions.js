import "dotenv/config";
import { getCapitals } from "./data";

let currentQuestion;

export const submitAnswer = async (prevValue, formData) => {
  const { answer } = Object.fromEntries(formData);

  if (currentQuestion === undefined) {
    currentQuestion = await nextQuestion();
    console.log(currentQuestion);
    return currentQuestion;
  }

  console.log(currentQuestion);
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    currentQuestion = await nextQuestion();
    return { succes: true, currentQuestion };
  } else {
    currentQuestion = await nextQuestion();
    return { succes: false, currentQuestion };
  }
};

export async function nextQuestion() {
  const quiz = await getCapitals();
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
  console.log(currentQuestion);
  return currentQuestion;
}
