import { useState } from "react";
import Input from "./components/Input";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./index.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="border bg-gray-900 border-gray-600 p-8 w-max rounded-xl mx-auto mt-36">
        <h1 className="text-gray-300 text-lg mb-5 pb-3 border-b border-gray-600 w-[500px]">
          Currency Converter
        </h1>
        <div className="relative flex flex-col gap-5 mb-6">
          <Input
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <Input
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button
            className="absolute bg-sky-600 text-white rounded-lg py-2 px-5 left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 border-3 border-slate-800"
            onClick={swap}
          >
            Swap
          </button>
        </div>
        <button
          onClick={convert}
          className="bg-sky-600 py-4 rounded-full w-full text-white text-lg "
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </>
  );
}

export default App;
