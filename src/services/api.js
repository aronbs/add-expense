export const getExpenses = async () => {
    const data = await fetch('api/expenses');
    const expenses = await data.json()
    return expenses;
}


export const addExpense = async (expense) => {
    const data = await fetch('api/create-expense', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)

    });
    const newExpense = await data.json()
    return newExpense.expense
}


export const removeExpense = async (id) => {
    const data = await fetch('api/expense/' + id, {
        method: "DELETE",
    });
    const deletedExpense = await data.json()
    return deletedExpense.deletedExpense
}