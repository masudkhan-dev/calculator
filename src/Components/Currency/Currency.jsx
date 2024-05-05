import { useState, useEffect } from "react";
import { FaEquals } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const Currency = () => {
  const [amount1, setAmount1] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [amount2, setAmount2] = useState("");
  const [currency2, setCurrency2] = useState("EUR");
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setExchangeRates(data.rates);
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, []);

  const handleAmountChange = (e, field) => {
    const value = e.target.value;
    const convertedAmount =
      field === "amount1"
        ? (value * exchangeRates[currency2]) / exchangeRates[currency1]
        : (value * exchangeRates[currency1]) / exchangeRates[currency2];

    if (field === "amount1") {
      setAmount1(value);
      setAmount2(convertedAmount);
    } else {
      setAmount1(convertedAmount);
      setAmount2(value);
    }
  };

  const handleCurrencyChange = (e, field) => {
    const value = e.target.value;
    if (field === "currency1") {
      setCurrency1(value);
      const convertedAmount =
        (amount1 * exchangeRates[currency1]) / exchangeRates[value];
      setAmount2(convertedAmount);
    } else if (field === "currency2") {
      setCurrency2(value);
      const convertedAmount =
        (amount2 * exchangeRates[currency2]) / exchangeRates[value];
      setAmount1(convertedAmount);
    }
  };

  const handleReset = () => {
    setAmount1("");
    setAmount2("");
  };

  const handleConvert = () => {
    const convertedAmount =
      (amount1 * exchangeRates[currency2]) / exchangeRates[currency1];
    setAmount2(convertedAmount);
  };

  return (
    <main>
      <div className="container mx-auto">
        <div>
          <header className="flex justify-center items-center mt-5">
            <h2 className="card-title">Currency Converter</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 mx-5 md:mx-72">
            <div>
              <select
                className="select select-bordered w-[300px]"
                value={currency1}
                onChange={(e) => handleCurrencyChange(e, "currency1")}
              >
                <option value="BDT">Bangladeshi Taka</option>
                <option value="USD">USD</option>
                <option value="EUR">Euro</option>
                <option value="INR">Rupee</option>
                <option value="GBP">British Pound</option>
                <option value="JPY">Japanese Yen</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="KRW">South Korean Won</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="AED">UAE Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="THB">Thai Baht</option>
                <option value="BRL">Brazilian Real</option>
                <option value="ARS">Argentine Peso</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="ITL">Italian Lira</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KPW">North Korean Won</option>
                <option value="KPW">North Korean Won</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="VES">Venezuelan Bolívar Soberano</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="CLP">Chilean Peso</option>
                <option value="COP">Colombian Peso</option>
                <option value="PEN">Peruvian Sol</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="SEK">Swedish Krona</option>
                <option value="TRY">Turkish Lira</option>
                <option value="ILS">Israeli Shekel</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="ZAR">South African Rand</option>
                <option value="RUB">Russian Ruble</option>
                <option value="AUD">Australian Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
            </div>
            <div className="hidden md:block">
              <select
                className="select select-bordered w-[300px]"
                value={currency2}
                onChange={(e) => handleCurrencyChange(e, "currency2")}
              >
                <option value="BDT">Bangladeshi Taka</option>
                <option value="EUR">Euro</option>
                <option value="INR">Rupee</option>
                <option value="USD">USD</option>
                <option value="GBP">British Pound</option>
                <option value="JPY">Japanese Yen</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="KRW">South Korean Won</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="AED">UAE Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="THB">Thai Baht</option>
                <option value="BRL">Brazilian Real</option>
                <option value="ARS">Argentine Peso</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="ITL">Italian Lira</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KPW">North Korean Won</option>
                <option value="KPW">North Korean Won</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="VES">Venezuelan Bolívar Soberano</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="CLP">Chilean Peso</option>
                <option value="COP">Colombian Peso</option>
                <option value="PEN">Peruvian Sol</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="SEK">Swedish Krona</option>
                <option value="TRY">Turkish Lira</option>
                <option value="ILS">Israeli Shekel</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="ZAR">South African Rand</option>
                <option value="RUB">Russian Ruble</option>
                <option value="AUD">Australian Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-72">
            <div>
              <input
                type="text"
                value={amount1}
                onChange={(e) => handleAmountChange(e, "amount1")}
                className="border-b-2 border-neutral bg-gray-200 py-3 w-[300px] outline-none px-3"
              />
            </div>

            <div className="md:hidden block">
              <select
                className="select select-bordered w-[300px]"
                value={currency2}
                onChange={(e) => handleCurrencyChange(e, "currency2")}
              >
                <option value="BDT">Bangladeshi Taka</option>
                <option value="EUR">Euro</option>
                <option value="INR">Rupee</option>
                <option value="USD">USD</option>
                <option value="GBP">British Pound</option>
                <option value="JPY">Japanese Yen</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="KRW">South Korean Won</option>
                <option value="VND">Vietnamese Dong</option>
                <option value="MYR">Malaysian Ringgit</option>
                <option value="AED">UAE Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="THB">Thai Baht</option>
                <option value="BRL">Brazilian Real</option>
                <option value="ARS">Argentine Peso</option>
                <option value="MMK">Myanmar Kyat</option>
                <option value="ITL">Italian Lira</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KPW">North Korean Won</option>
                <option value="KPW">North Korean Won</option>
                <option value="GHS">Ghanaian Cedi</option>
                <option value="VES">Venezuelan Bolívar Soberano</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="EGP">Egyptian Pound</option>
                <option value="NGN">Nigerian Naira</option>
                <option value="KES">Kenyan Shilling</option>
                <option value="CLP">Chilean Peso</option>
                <option value="COP">Colombian Peso</option>
                <option value="PEN">Peruvian Sol</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="SEK">Swedish Krona</option>
                <option value="TRY">Turkish Lira</option>
                <option value="ILS">Israeli Shekel</option>
                <option value="AED">United Arab Emirates Dirham</option>
                <option value="SAR">Saudi Riyal</option>
                <option value="ZAR">South African Rand</option>
                <option value="RUB">Russian Ruble</option>
                <option value="AUD">Australian Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                value={amount2}
                onChange={(e) => handleAmountChange(e, "amount2")}
                className="border-b-2 border-neutral bg-gray-200 py-3 w-[300px] outline-none px-3"
              />
            </div>

            {/* Convert Button */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[22.6em]">
              <button
                onClick={handleConvert}
                className="btn btn-success w-[300px]"
              >
                <FaEquals /> Convert
              </button>
              <button onClick={handleReset} className="btn btn-error w-[300px]">
                <GrPowerReset className="w-4 h-4" /> Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Currency;
