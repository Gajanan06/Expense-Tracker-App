import { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummayPanel";

function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses,newExpense]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl font-bold text-center text-green-600 mb-8">Expense Tracker</h2>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

       <ExpenseForm addExpense={addExpense}/>

       <SummaryPanel />

       <ExpenseList />

       <CurrencyConverter />

       </div>
    </div>
  )
}

export default App
