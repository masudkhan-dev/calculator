import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { IoMdSwap } from "react-icons/io";

const Converter = () => {
  const [fromBase, setFromBase] = useState("Hexadecimal");
  const [toBase, setToBase] = useState("Decimal");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toUpperCase();

    let isValidInput = true;
    let inputPattern;

    switch (fromBase) {
      case "Binary":
        inputPattern = /^[01]*$/;
        break;
      case "Decimal":
        inputPattern = /^[0-9]*$/;
        break;
      case "Octal":
        inputPattern = /^[0-7]*$/;
        break;
      case "Hexadecimal":
        inputPattern = /^[0-9A-F]*$/;
        break;
      default:
        isValidInput = false;
    }

    if (!isValidInput || inputPattern.test(inputValue) || inputValue === "") {
      setInputValue(inputValue);
      setErrorMessage("");
    } else {
      setErrorMessage(`Please enter a valid ${fromBase.toLowerCase()} number.`);
    }
  };

  const handleConvert = () => {
    let result = "";
    let parsedValue = parseInt(inputValue, 16);
    if (isNaN(parsedValue)) {
      setErrorMessage("Please enter a valid hexadecimal number.");
      return;
    }

    switch (fromBase) {
      case "Binary":
        result = parseInt(inputValue, 2);
        break;
      case "Decimal":
        result = parseInt(inputValue, 10);
        break;
      case "Octal":
        result = parseInt(inputValue, 8);
        break;
      default:
        result = parsedValue;
        break;
    }

    switch (toBase) {
      case "Binary":
        result = result.toString(2);
        break;
      case "Decimal":
        result = result.toString(10);
        break;
      case "Octal":
        result = result.toString(8);
        break;
      default:
        result = result.toString(16).toUpperCase();
        break;
    }

    setOutputValue(result);
  };

  const handleReset = () => {
    setInputValue("");
    setOutputValue("");
    setErrorMessage("");
  };

  const handleSwap = () => {
    setFromBase(toBase);
    setToBase(fromBase);
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          {/* Header */}
          <header className="py-5">
            <h2 className="text-xl md:text-3xl text-center font-bold mb-5">
              {`${fromBase} to ${toBase} Converter`}
            </h2>
          </header>

          {/* Select from and to base */}
          <div className="flex justify-between gap-5 md:gap-32">
            <div>
              <p className="font-bold mb-2">From</p>
              <select
                className="select select-bordered w-full max-w-xs"
                value={fromBase}
                onChange={(e) => setFromBase(e.target.value)}
              >
                <option>Binary</option>
                <option>Decimal</option>
                <option>Octal</option>
                <option>Hexadecimal</option>
              </select>
            </div>
            <div>
              <p className="font-bold mb-2">To</p>
              <select
                className="select select-bordered w-full max-w-xs"
                value={toBase}
                onChange={(e) => setToBase(e.target.value)}
              >
                <option>Binary</option>
                <option>Decimal</option>
                <option>Octal</option>
                <option>Hexadecimal</option>
              </select>
            </div>
          </div>

          {/* Input hexadecimal value */}
          <div className="my-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[300px] md:w-[410px]"
              value={inputValue}
              onChange={handleInputChange}
            />
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </div>

          {/* Convert, reset, and swap buttons */}
          <div className="flex justify-between gap-2 md:gap-16">
            <button
              className="btn btn-success text-white"
              onClick={handleConvert}
            >
              = Convert
            </button>
            <button className="btn btn-error text-white" onClick={handleReset}>
              <GrPowerReset /> Reset
            </button>
            <button className="btn btn-neutral text-white" onClick={handleSwap}>
              <IoMdSwap /> Swap
            </button>
          </div>

          {/* Result */}
          <div className="my-5">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Show results here"
              className="border border-green-500 bg-gray-200 p-5 rounded-md outline-none w-72 md:w-[400px]"
              readOnly
              value={outputValue}
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Converter;
