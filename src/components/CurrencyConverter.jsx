import { useState,useEffect } from "react";

function CurrencyConverter({expenses}) {

    const [currency, setCurrency] = useState("USD");

    const [rate, setRate] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const totalAmount = expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );


    useEffect(() => {
    const fetchRate = async () => {

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://open.er-api.com/v6/latest/INR"
        );

        const data = await response.json();

        setRate(data.rates[currency]);

      } catch (err) {
        setError("Failed to fetch exchange rate");
      } finally {
        setLoading(false);
      }

    };

    fetchRate();

  }, [currency]);



    const convertedAmount = rate
        ? (totalAmount * rate).toFixed(2)
        : 0;

    return (
        <div className="bg-mist-100 p-6 rounded-xl shadow-md">

         <h2 className="text-2xl text-center font-semibold mb-5">Currency Converter</h2>


      <div className="mb-5">

        <p className="text-gray-600 mb-1">
          Total Expenses
        </p>

        <h3 className="text-3xl font-bold text-green-700">
          ₹ {totalAmount}
        </h3>

      </div>

    
      <div className="mb-5">

        <label className="block mb-2 font-medium">Convert To</label>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500">

          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="AUD">AUD - Australian Dollar</option>
          <option value="CAD">CAD - Canadian Dollar</option>
          <option value="NZD">NZD - New Zealand Dollar</option>
          <option value="RUB">RUB - Russian Ruble</option>
        </select>

      </div>

      
      {loading && (
        <p className="text-blue-500">
          Loading exchange rate...
        </p>
      )}

    
      {error && (
        <p className="text-red-500">
          {error}
        </p>
      )}

      
      {!loading && !error && (

        <div className="bg-gray-100 rounded-lg p-4">

          <p className="text-gray-600 mb-1">
            Converted Amount
          </p>

          <h3 className="text-3xl font-bold text-green-700">
            {currency} {convertedAmount}
          </h3>

        </div>

      )}

    </div>
    );
}

export default CurrencyConverter;