function ExpenseList({ expenses , deleteExpense})
 {

    return (
        <div className="bg-mist-100 p-6 rounded-xl shadow-md h-125 flex flex-col">
            <h2 className="text-2xl text-center font-semibold mb-5">Expense List</h2>

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
                            <h3 className="pl-2 text-lg font-semibold text-gray-800">{expense.title}</h3>

                            <p className="inline-block mt-2 bg-gray-100 text-gray-500 px-3 text-sm rounded-full">{expense.category}</p>

                        </div>

                        <div className="text-right">
                            <p className="text-xl pr-3 font-bold text-green-600">₹ {expense.amount}
                            </p>

                            <button onClick={() => deleteExpense(expense.id)}
                              className="mt-2 pr-4 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition">
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