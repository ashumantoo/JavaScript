let myAccount = {
    name: 'Ashutosh Mantoo',
    expenses: 0,
    income: 0
};

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
};

addExpense(myAccount, 100);
console.log(myAccount);

let addIncome = function (account, income) {
    account.income = account.income + income;
};

addIncome(myAccount, 1000);
console.log(myAccount);

let resetAccount = function (account) {
    account.income = 0;
    account.expenses = 0;
};

resetAccount(myAccount);
console.log(myAccount);

let getAccountSummary = function (account) {
    return `Account for ${account.name} has ${account.income + account.expenses}. ${account.income} in income and ${account.expenses} in expenses. `;
};

let accountSummary = getAccountSummary(myAccount);
console.log(accountSummary);
console.log(myAccount);
