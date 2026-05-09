import { useState,useEffect } from "react";
import Header from "./components/Header";
import CurrencyConverter from "./components/CurrencyConverter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummayPanel";
import Footer from "./components/Footer";

function App() {

  const [expenses, setExpenses] = useState(() => {

  const savedExpenses = localStorage.getItem("expenses");

    return savedExpenses
      ? JSON.parse(savedExpenses)
      : [];

  });

  const addExpense = (newExpense) => {
    setExpenses([...expenses,newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(updatedExpenses);
  }

  useEffect(() => {

    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );

  }, [expenses]);

  return (
   <div className="min-h-screen flex flex-col bg-gray-300">
    <Header />
    
    <main>
      <div className="min-h-screen bg-gray-300 p-6 ">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

        <ExpenseForm addExpense={addExpense}/>

        <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>

        <SummaryPanel expenses={expenses}/>
 
        

        <CurrencyConverter expenses={expenses}/>

       

       </div>
      </div>
    </main>

    <Footer />
   </div>
  )
}

export default App
