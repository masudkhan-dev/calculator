import { FaPercent, FaDivide, FaMinus, FaPlus, FaEquals } from "react-icons/fa";
import { PiBracketsRoundBold } from "react-icons/pi";
import { useState } from "react";

const ScientificCalculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else if (value === "()") {
      if (input.includes("(") && input.includes(")")) {
        setInput(input.replace(/\(|\)/g, ""));
      } else {
        setInput(`(${input})`);
      }
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <main>
      <div className="container mx-auto">
        <header className="flex justify-center items-center">
          <h2 className="card-title text-center">Scientific Calculator</h2>
        </header>
        <div className="w-64 mx-auto mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
          <input
            type="text"
            className="w-full h-12 bg-white mb-4 text-right text-lg rounded-md px-4 outline-none"
            readOnly
            value={input}
          />
          <div className="grid grid-cols-4 gap-2">
            <button
              className="bg-gray-400 text-gray-700 font-bold text-lg rounded-full p-3 hover:bg-gray-800 hover:text-white"
              onClick={() => handleClick("AC")}
            >
              AC
            </button>
            <button
              className="bg-gray-400 text-gray-700 font-bold text-lg rounded-full p-3 hover:bg-gray-800 hover:text-white flex justify-center items-center"
              onClick={() => handleClick("DEL")}
            >
              DEL
            </button>
            <button
              className="bg-gray-400 text-gray-700 font-bold text-sm flex justify-center items-center rounded-full p-3 hover:bg-gray-800 hover:text-white"
              onClick={() => handleClick("%")}
            >
              <FaPercent />
            </button>
            <button
              className="bg-orange-400 text-white font-bold text-lg rounded-full p-3 hover:bg-orange-500 flex justify-center items-center"
              onClick={() => handleClick("/")}
            >
              <FaDivide />
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("7")}
            >
              7
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("8")}
            >
              8
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("9")}
            >
              9
            </button>
            <button
              className="bg-orange-400 text-white font-bold text-lg rounded-full p-3 hover:bg-orange-500 flex justify-center items-center"
              onClick={() => handleClick("*")}
            >
              X
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("4")}
            >
              4
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("5")}
            >
              5
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("6")}
            >
              6
            </button>
            <button
              className="bg-orange-400 text-white font-bold text-lg rounded-full p-3 hover:bg-orange-500 flex justify-center items-center"
              onClick={() => handleClick("-")}
            >
              <FaMinus />
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("1")}
            >
              1
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("2")}
            >
              2
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("3")}
            >
              3
            </button>
            <button
              className="bg-orange-400 text-white font-bold text-lg rounded-full p-3 hover:bg-orange-500 flex justify-center items-center"
              onClick={() => handleClick("+")}
            >
              <FaPlus />
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("0")}
            >
              0
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick(".")}
            >
              .
            </button>
            <button
              className="bg-gray-700 text-white font-bold text-lg rounded-full p-3 hover:bg-gray-800 flex justify-center items-center"
              onClick={() => handleClick("()")}
            >
              <PiBracketsRoundBold />
            </button>
            <button
              className="bg-orange-400 text-white font-bold text-lg rounded-full p-3 hover:bg-orange-500 flex justify-center items-center"
              onClick={() => handleClick("=")}
            >
              <FaEquals />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScientificCalculator;
