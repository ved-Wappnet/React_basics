import React, { useState } from "react";
import questions from "../constants/questions.json";
import Questions from "./Questions";
import Result from "./Result";

const QuizApp = () => {
  const [currquestion, setCurrquestion] = useState(0);
  const [userans, setUserans] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrquestion(currquestion + 1);
    setUserans([...userans, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrquestion(0);
    setUserans([]);
  };
  return (
    <div>
      <h1 className="text-center font-medium text-3xl mt-8">QuizApp</h1>

      {/* Quetion Component */}
      {currquestion < questions.length && (
        <Questions
          question={questions[currquestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {/* Result Component */}
      {currquestion === questions.length && (
        <Result userAns={userans} question={questions} resetQuiz={resetQuiz} />
      )}
    </div>
  );
};

export default QuizApp;
