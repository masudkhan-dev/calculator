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
        inputPattern = /^[01]*\.?[01]*$/;
        break;
      case "Decimal":
        inputPattern = /^[0-9]*\.?[0-9]*$/;
        break;
      case "Octal":
        inputPattern = /^[0-7]*\.?[0-7]*$/;
        break;
      case "Hexadecimal":
        inputPattern = /^[0-9A-F]*\.?[0-9A-F]*$/;
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

    // Handle decimal point conversion
    const convertBase = (value, fromRadix, toRadix) => {
      // Split the number into integer and fractional parts
      const [integerPart, fractionalPart] = value.split(".");

      // Convert integer part
      let intResult = parseInt(integerPart, fromRadix);
      if (isNaN(intResult)) {
        setErrorMessage(
          `Please enter a valid ${fromBase.toLowerCase()} number.`
        );
        return "";
      }

      // Convert fractional part if exists
      let fracResult = 0;
      if (fractionalPart) {
        // Convert fractional part by summing place values
        fracResult = fractionalPart.split("").reduce((acc, digit, index) => {
          const digitValue = parseInt(digit, fromRadix);
          return acc + digitValue / Math.pow(fromRadix, index + 1);
        }, 0);
      }

      // Combine integer and fractional parts
      const fullNumber = intResult + fracResult;

      // Convert to target base
      if (toRadix === 10) {
        // For decimal, we can use toFixed to limit decimal places
        return fullNumber.toFixed(6).replace(/\.?0+$/, "");
      }

      // Convert integer part
      const intPartResult = Math.floor(fullNumber)
        .toString(toRadix)
        .toUpperCase();

      // Convert fractional part
      if (fractionalPart) {
        let fracPartResult = "";
        let fracPart = fullNumber % 1;

        // Calculate fractional part for 6 decimal places
        for (let i = 0; i < 6; i++) {
          fracPart *= toRadix;
          const digit = Math.floor(fracPart);
          fracPartResult += digit.toString(toRadix).toUpperCase();
          fracPart %= 1;
        }

        return fracPartResult
          ? `${intPartResult}.${fracPartResult}`
          : intPartResult;
      }

      return intPartResult;
    };

    // Determine conversion based on selected bases
    switch (fromBase) {
      case "Binary":
        result = convertBase(
          inputValue,
          2,
          toBase === "Binary"
            ? 2
            : toBase === "Decimal"
            ? 10
            : toBase === "Octal"
            ? 8
            : 16
        );
        break;
      case "Decimal":
        result = convertBase(
          inputValue,
          10,
          toBase === "Binary"
            ? 2
            : toBase === "Decimal"
            ? 10
            : toBase === "Octal"
            ? 8
            : 16
        );
        break;
      case "Octal":
        result = convertBase(
          inputValue,
          8,
          toBase === "Binary"
            ? 2
            : toBase === "Decimal"
            ? 10
            : toBase === "Octal"
            ? 8
            : 16
        );
        break;
      case "Hexadecimal":
        result = convertBase(
          inputValue,
          16,
          toBase === "Binary"
            ? 2
            : toBase === "Decimal"
            ? 10
            : toBase === "Octal"
            ? 8
            : 16
        );
        break;
      default:
        result = "";
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

  const getPlaceholderText = () => {
    switch (fromBase) {
      case "Binary":
        return "Enter a binary number (e.g., 1010.11)";
      case "Decimal":
        return "Enter a decimal number (e.g., 14.3)";
      case "Octal":
        return "Enter an octal number (e.g., 16.4)";
      case "Hexadecimal":
        return "Enter a hexadecimal number (e.g., A.5)";
      default:
        return "Type here";
    }
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
            <div className="flex flex-col justify-center items-end">
              <input
                type="text"
                placeholder={getPlaceholderText()}
                className="input input-bordered w-[300px] md:w-[410px] relative"
                value={inputValue}
                onChange={handleInputChange}
              />
              <p className=" mr-5 inline-block  text-slate-400 text-md absolute">
                {inputValue.length}
              </p>
            </div>
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
          <div className="my-5 flex flex-col justify-center items-center">
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Show results here"
              className="border border-green-500 bg-gray-50 p-5 rounded-md outline-none w-72 md:w-[400px] relative"
              readOnly
              value={outputValue}
            ></textarea>
            <p className=" ml-60 md:ml-[22em] text-slate-400 text-md absolute">
              {outputValue.length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Converter;
