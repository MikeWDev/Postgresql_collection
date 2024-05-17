// import "dotenv/config";
// import { getCapitals } from "./data";
// import { db } from "./utils";

// let currentQuestion;

// export const submitAnswer = async (formData) => {
//   const { answer } = Object.fromEntries(formData);
//   const quiz = getCapitals();
//   let isCorrect = false;
//   nextQuestion();
//   if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
//     isCorrect = true;
//   }
//   return isCorrect;
// };

// export async function nextQuestion() {
//   const quiz = getCapitals();
//   const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
//   currentQuestion = randomCountry;
//   return currentQuestion;
// }
