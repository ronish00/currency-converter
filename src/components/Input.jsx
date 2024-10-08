import React from "react";

const Input = ({
  amount,
  amountDisable = false,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyDisable = false,
  currencyOptions=[],
}) => {
  return (
    <div className="relative  w-[500px]">
      <input
        className="px-6 py-4 rounded-full bg-slate-800 border border-gray-600 w-full text-white text-xl"
        type="number"
        min={0}
        value={amount}
        disabled={amountDisable}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
      <select
        name=""
        id=""
        className="absolute right-3.5 top-2.5 rounded-3xl px-2 py-2 bg-slate-600 border border-gray-400 border-opacity-50 text-white"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
        <option value="">usd</option>
      </select>
    </div>
  );
};

export default Input;
