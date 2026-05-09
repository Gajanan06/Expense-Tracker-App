import { useState } from "react";

function ExpenseForm({addExpense}) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !amount) {
            alert("Please fill the fields");
            return;
        }

        const newExpense = {
            id: Date.now(),
            title: title.trim(),
            amount: Number(amount),
            category,
        };

        console.log(newExpense)
        addExpense(newExpense);

        setTitle("");
        setAmount("");
        setCategory("Food");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-5">Add new Expense</h3>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block md-2 font-medium">Expense Name</label>
                    <input required 
                       type="text"
                       placeholder="Enter Expense Name"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"/>
                </div>

                <div>
                    <label className="block md-2 font-medium">Amount</label>
                    <input required 
                       type="number"
                       min="1"
                       placeholder="Enter Amount"
                       value={amount}
                       onChange={(e) => setAmount(e.target.value)}
                       className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500"/>
                </div>

                <div>
                    <label className="block md-2 font-medium">Category</label>
                    <select 
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                       className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500">

                       <option>Food</option>
                       <option>Travel</option>
                       <option>Marketing</option>
                       <option>Utilities</option>
                       <option>Other</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition duration-300">
                    Add Expense</button> 
            </form>
        </div>
    );
}

export default ExpenseForm;