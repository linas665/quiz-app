import React, { useState } from "react";

const Quiz = ({ data, index, handleNext, handlePoint }) => {
  console.log(data);


  const handleValid = (getOption, event) => {
    console.log(getOption.isCorrect);
    // event.target.classList.add("hover")

    getOption.isCorrect && handlePoint()
    handleNext()
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className=" w-max grid gap-3">
        <h1>
          {index}. {data.questionText}
        </h1>
        <div className="flex flex-col gap-2 justify-end items-end">
          {data.options &&   data.options.map((option, index) => (
            <div key={index} className="w-full">
              <button
                onClick={(event) => {
                  handleValid(option, event);
                }}
                className={`option-button hover:bg-black hover:text-white border w-full flex px-2 py-1 rounded-md`}
              >
                {option.optionText}
              </button>
            </div>
          ))}
          <button
            className="border  w-max px-2 border-gray-200 rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
