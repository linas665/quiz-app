import React, { useEffect, useState } from "react";
import Quiz from "./Quiz";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [order, setOrder] = useState(0);

  const fetchQuiz = async () => {
    const response = await fetch("http://localhost:3000/api/questions");
    const data = await response.json();
    setQuiz(data);
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  console.log();

  return (
    <div className="w-full h-lvh flex justify-center items-center flex-col">
      {quiz.map((data, index) =>
        order === index ? <Quiz key={index} data={quiz[order]}  index={index+1} /> : null
      )}
      <button onClick={() => setOrder(order + 1)}>next</button>
    </div>
  );
};

export default Home;
