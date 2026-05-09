function ExpenseList({ expenses , deleteExpense})
 {

    console.log(expenses);
    return (
        <div className="bg-white p-6 rounded-xl shadow-md h-125 flex flex-col">
            <h2 className="text-2xl font-semibold mb-5">Expense List</h2>

            {expenses.length === 0 ? (
                <p className="text-gray-500 text-center">
                    No expenses added yet
                </p>
            ) : (
                <div className="space-y-4 overflow-y-auto flex-1 pr-2">
                    {expenses.map((expense) => (
                        <div 
                          key={expense.id}
                          className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:shadow-md transition duration-300">

                        <div>
                            <h3 className="text-lg font-semibold">{expense.title}</h3>

                            <p className="text-gray-500 text-sm">{expense.category}</p>

                        </div>

                        <div className="text-right">
                            <p className="text-lg font-bold text-green-600">₹ {expense.amount}
                            </p>

                            <button onClick={() => deleteExpense(expense.id)}
                              className="mt-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition">
                                Delete
                              </button>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExpenseList;