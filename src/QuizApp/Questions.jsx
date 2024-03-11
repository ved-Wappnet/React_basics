import React from "react";

const Questions = ({ question, onAnswerClick }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
      <h2 className="text-lg font-bold mb-4">{question.question}</h2>
      <ul>
        {question.answerOptions.map((option) => {
          return (
            <li key={option.text} className="mb-2">
              <button
                onClick={() => onAnswerClick(option.isCorrect)}
                className="w-full bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;
