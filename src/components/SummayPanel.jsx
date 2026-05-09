function SummaryPanel({expenses}) {

    const totalAmount = expenses.reduce(
     (total, expense) => total + expense.amount,0);


    const categoryTotals = expenses.reduce((acc, expense) => {

      if (acc[expense.category]) {
        acc[expense.category] += expense.amount;
      } else {
        acc[expense.category] = expense.amount;
      }

      return acc;

    }, {});

    return (
       <div className="bg-white p-6 rounded-xl shadow-md h-125 flex flex-col">

      <h2 className="text-2xl font-semibold mb-5 text-center">
        Summary
      </h2>

      <div className="bg-green-100 rounded-lg p-4 mb-5">

        <p className="text-gray-700 mb-1">
          Total Expenses
        </p>

        <h3 className="text-3xl font-bold text-green-700">
          ₹ {totalAmount}
        </h3>

      </div>

      <div className="mb-5">

        <p className="text-gray-600">
          Total Entries:
          <span className="font-semibold ml-2">
            {expenses.length}
          </span>
        </p>

      </div>

      <div className="flex-1 overflow-hidden min-h-0">

        <h3 className="text-lg font-semibold mb-3">
          Category Breakdown
        </h3>

        {expenses.length === 0 ? (

          <p className="text-gray-500">
            No data available
          </p>

        ) : (

          <div className="space-y-3 overflow-y-auto max-h-45 pr-2">

            {Object.entries(categoryTotals).map(([category, amount]) => (

              <div
                key={category}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-3"
              >

                <p className="font-medium">
                  {category}
                </p>

                <p className="font-semibold text-green-600">
                  ₹ {amount}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
    );
}

export default SummaryPanel;