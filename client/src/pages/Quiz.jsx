import React, { useState } from "react";

const Quiz = ({ data, index }) => {
  console.log(data.options);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);

  const [point, setPoint] = useState(0)

  const handleValid = (option, event) => {
    console.log(index);

    setSelectedOption(option.optionText);
    setCorrectOption(option.isCorrect);

    if(option.isCorrect) {
      setPoint(point+5)
    }

    // Update the background color of the clicked button
    event.target.classList.add(option.isCorrect ? "bg-green" : "bg-red");

    // Optionally, remove the background color of previously selected button
    // if you want to reset it when another option is clicked
    document.querySelectorAll(".option-button").forEach((button) => {
      if (button !== event.target) {
        button.classList.remove("bg-green", "bg-red");
      }
    });
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1>Points: {point}</h1>
      <div className=" w-max grid gap-3">
        <h1>
          {index}. {data.questionText}
        </h1>
        <div>
          {data.options.map((option, index) => (
            <div key={Math.random()} className="flex flex-col gap-2 p-1">
              <button
                onClick={(event) => handleValid(option, event)}
                className={`option-button border w-64 flex ${
                  selectedOption === option.optionText
                    ? correctOption
                      ? "bg-green-700"
                      : "bg-red-700"
                    : ""
                }`}
              >
                {option.optionText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
