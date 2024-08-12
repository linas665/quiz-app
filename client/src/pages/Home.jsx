import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [order, setOrder] = useState(0);
  const [point, setPoint] = useState(0);


  const fetchQuiz = async () => {
    const response = await fetch("http://localhost:3000/api/questions");
    const data = await response.json();
    setQuiz(data);
  };

  const handleNext = () => {
    order < quiz.length && setOrder((prev) => prev + 1);
  };

  const handlePoint = () => {
    setPoint((prev) => prev + 1);
  };

  const handlePlayAgain = () => {
    setOrder(0)
    setPoint(0)
  }

  useEffect(() => {
    fetchQuiz();
  }, []);

  console.log(quiz.length);

  return (
    <div className="w-full h-[90svh] flex gap-3 justify-center items-center flex-col">
      {quiz.map((data, index) =>
        order === index ? (
          <Quiz
            key={index}
            handleNext={handleNext}
            handlePoint={handlePoint}
            data={quiz[order]}
            index={index + 1}
          />
        ) : null
      )}
      {order === quiz.length && (
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl">You got {point} points.</h1>
          <button onClick={() => handlePlayAgain()} className="border w-max px-3 rounded-md  hover:bg-black hover:text-white py-1">play again</button>
        </div>
      )}
    </div>
  );
};

export default Home;
