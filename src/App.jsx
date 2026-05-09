import CurrencyConverter from "./components/CurrencyConverter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummayPanel";

function App() {

  return (
    <>
    <div>
      <h2 className="text-3xl text-center font-bold underline">Expense Tracker</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ExpenseForm />
      <SummaryPanel />
      <ExpenseList />
      <CurrencyConverter />
      </div>

    </>
  )
}

export default App
