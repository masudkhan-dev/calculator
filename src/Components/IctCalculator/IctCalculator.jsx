import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

const IctCalculator = () => {
  const [fromBase, setFromBase] = useState("Binary");
  const [operation, setOperation] = useState("Plus");
  const [inputs, setInputs] = useState([{ value: "" }]);
  const [result, setResult] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCalculate = () => {
    let isValidInput = true;

    inputs.forEach((input) => {
      let inputPattern;
      switch (fromBase) {
        case "Binary":
          inputPattern = /^[01]*$/;
          break;
        case "Octal":
          inputPattern = /^[0-7]*$/;
          break;
        case "Decimal":
          inputPattern = /^[0-9]*$/;
          break;
        case "Hexadecimal":
          inputPattern = /^[0-9A-F]*$/i;
          break;
        default:
          isValidInput = false;
          break;
      }
      if (!inputPattern.test(input.value.toUpperCase())) isValidInput = false;
    });

    if (!isValidInput) {
      setErrorMessage("Invalid input");
      return;
    }

    let values = inputs.map((input) =>
      parseInt(input.value.toUpperCase(), getBase(fromBase))
    );

    let calculatedResult;
    switch (operation) {
      case "Plus":
        calculatedResult = values.reduce((acc, val) => acc + val, 0);
        break;
      case "Minus":
        calculatedResult = values.reduce((acc, val) => acc - val);
        break;
      case "Multiply":
        calculatedResult = values.reduce((acc, val) => acc * val, 1);
        break;
      case "Divide":
        calculatedResult = values.reduce((acc, val) => acc / val);
        break;
      default:
        calculatedResult = "Invalid operation";
    }

    setResult(calculatedResult.toString(getBase(fromBase)).toUpperCase());
    setErrorMessage("");
  };

  const handleReset = () => {
    setInputs([{ value: "" }]);
    setResult("");
    setErrorMessage("");
  };

  const getBase = (base) => {
    switch (base) {
      case "Binary":
        return 2;
      case "Decimal":
        return 10;
      case "Octal":
        return 8;
      case "Hexadecimal":
        return 16;
      default:
        return 10;
    }
  };

  const handleInputChange = (index, value) => {
    const inputValue = value.toUpperCase();
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
        break;
    }

    if (!inputPattern.test(inputValue)) {
      setErrorMessage("Invalid input");
      return;
    }

    const newInputs = [...inputs];
    newInputs[index].value = inputValue;
    setInputs(newInputs);
    setErrorMessage("");
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: "" }]);
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          {/* Header */}
          <header className="py-5">
            <h2 className="text-xl md:text-3xl text-center font-bold mb-5">
              {`${fromBase} ${operation} Operations`}
            </h2>
          </header>

          {/* Select from and to base */}
          <div className="flex justify-between gap-10 md:gap-40">
            <div>
              <p className="font-bold mb-2">Method</p>
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
              <p className="font-bold mb-2">Operation</p>
              <select
                className="select select-bordered w-full max-w-xs"
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
              >
                <option>Plus</option>
                <option>Minus</option>
                <option>Multiply</option>
                <option>Divide</option>
              </select>
            </div>
          </div>

          {/* Input values */}
          <div className="flex flex-col gap-2 my-2">
            {inputs.map((input, index) => (
              <div key={index} className="flex flex-col gap-2 my-2">
                <input
                  type="text"
                  name={`inputValue${index + 1}`}
                  className="input input-bordered w-72 md:w-[410px]"
                  value={input.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={`Enter ${fromBase} number`}
                />
              </div>
            ))}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
          </div>

          {/* Calculate, reset */}
          <div className="flex justify-between gap-1 md:gap-10">
            <button
              className="btn btn-success text-white"
              onClick={handleCalculate}
            >
              = Calculate
            </button>
            <button className="btn btn-error text-white" onClick={handleReset}>
              <GrPowerReset /> Reset
            </button>
            <button className="btn btn-accent" onClick={handleAddInput}>
              <FaRegHeart className="h-6 w-6" />
              Add
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
              value={result}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IctCalculator;
