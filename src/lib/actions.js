"use server";
import "dotenv/config";
import { getCapitalByFlag, getCapitals, getFlags } from "./data";
import { sql } from "@vercel/postgres";

//Capitals quiz
let currentCapitalQuestion;

export const submitCapitalAnswer = async (prevValue, formData) => {
  const { answer } = Object.fromEntries(formData);

  if (currentCapitalQuestion === undefined) {
    currentCapitalQuestion = await nextCapitalQuestion();
    console.log(currentCapitalQuestion);
    return currentCapitalQuestion;
  }

  if (currentCapitalQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    currentCapitalQuestion = await nextCapitalQuestion();
    return { succes: true, currentCapitalQuestion };
  } else {
    currentCapitalQuestion = await nextCapitalQuestion();
    return { succes: false, currentCapitalQuestion };
  }
};

export async function nextCapitalQuestion() {
  const quiz = await getCapitals();
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentCapitalQuestion = randomCountry;
  console.log(currentCapitalQuestion);
  return currentCapitalQuestion;
}
//Flag quiz
let currentFlagQuestion;
let currentFlagCapital;
export const SubmitFlagsAnswer = async (prevValue, formData) => {
  const { answer } = Object.fromEntries(formData);
  if (currentFlagQuestion === undefined) {
    const flagData = await nextFlagQuestion();
    console.log("FlagData" + flagData);
    currentFlagQuestion = flagData.currentFlagQuestion;
    currentFlagCapital = flagData.currentFlagCapital;

    return currentFlagQuestion;
  }
  console.log("FlagQ:" + currentFlagQuestion + " FlagC: " + currentFlagCapital);
  if (currentFlagCapital.capital.toLowerCase() === answer.toLowerCase()) {
    const flagQuestion = await nextFlagQuestion();
    currentFlagQuestion = flagQuestion.currentFlagQuestion;
    return { succes: true, currentFlagQuestion };
  } else {
    const flagQuestion = await nextFlagQuestion();
    currentFlagQuestion = flagQuestion.currentFlagQuestion;
    return { succes: false, currentFlagQuestion };
  }
};
export async function nextFlagQuestion() {
  const quizFlags = await getFlags();
  const randomFlag = quizFlags[Math.floor(Math.random() * quizFlags.length)];
  currentFlagQuestion = randomFlag;
  const capitalByFlagRes = await getCapitalByFlag(currentFlagQuestion.name);
  console.log("next" + randomFlag);
  console.log("next" + currentFlagQuestion);
  return { currentFlagQuestion, currentFlagCapital };
}
