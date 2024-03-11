import React from "react";

const Result = ({ userAns, question, resetQuiz }) => {
  const correctAnswer = userAns.filter((ans) => ans).length;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-bold mb-4">Results</h2>
      <p className="mb-4">
        You answered {correctAnswer} out of {question.length} questions.
        <span
          onClick={resetQuiz}
          className="text-blue-500 cursor-pointer ml-2 hover:underline"
        >
          Click here to retry
        </span>
      </p>
      <ul>
        {question.map((question, index) => {
          const correctOption = question.answerOptions.find(
            (option) => option.isCorrect
          );

          return (
            <li
              key={index}
              className="border-b py-2 flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="flex-grow">
                <span className="text-gray-700">
                  Q{index + 1}. {question.question}
                </span>

                {correctOption && (
                  <span className="text-green-500 ml-2">
                    (Correct answer: {correctOption.text})
                  </span>
                )}
              </div>
              <span
                className={userAns[index] ? "text-green-500" : "text-red-500"}
              >
                {userAns[index] ? "Correct" : "Incorrect"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
