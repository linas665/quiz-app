import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Create = () => {
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [isCorrect, setIsCorrect] = useState("");

  const handleRemove = (optionToRemove) => {
    setOptionList(optionList.filter((opt) => opt.text !== optionToRemove));
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (option && optionList.length < 4) {
      setOptionList([...optionList, { text: option, isCorrect: false }]);
      setOption("");
    }
  };

  const handleChangeOption = (e) => {
    const correctOptionText = e.target.value;
    setIsCorrect(c)
  }

  return (
    <div className="w-full flex justify-center h-[90svh]">
      <div className="w-3/5 flex flex-col gap-5 pt-16">
        <h1 className="text-3xl tracking-tighter">create a quiz</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2"
        >
          <input
            type="text"
            placeholder="question"
            className="border px-2 rounded-md outline-none py-1"
          />
          <div className="flex gap-2">
            <input
              onChange={(e) => setOption(e.target.value)}
              type="text"
              value={option}
              placeholder="Enter 4 options"
              className="border px-2 rounded-md outline-none py-1"
            />
            <button
              onClick={handleAddOption}
              className="border px-2 py-1 rounded-md hover:bg-black hover:text-white"
            >
              Add
            </button>
          </div>
          <div className="flex flex-col gap-1 w-max">
            {optionList.map((data, index) => (
              <div key={index} className="flex flex-row">
                <div className="px-2 py-1 border rounded-md flex gap-2">
                  {data.text}
                  <button onClick={() => handleRemove(data.text)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {optionList.length > 0 && (
            <div className="flex items-center gap-1">
              <label>Select right option</label>
              <select
                className="border px-1 py-1 rounded-md outline-none"
                onChange={handleChangeOption}
              >
                {optionList.map((data) => (
                  <option key={Math.random()} value={data[0]}>
                    {data.text}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="w-full flex justify-end">
            <button className="bg-black w-max text-white px-2 py-1 rounded-md">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
