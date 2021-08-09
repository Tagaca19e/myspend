const incomeColors = [
  "#00AF91",
  "#007965",
  "#F58634",
  "#FFCC29",
  "#76ff61",
  "#83d681",
  "#6dd660",
  "#c3ffe1",
  "#bfffe5",
];
const expenseColors = [
  "#F0134D",
  "#FF6F5E",
  "#40BFC1",
  "#F5DEA3",
  "#443737",
  "#FF5200",
  "#FF6363",
  "#FE346E",
  "#D63447",
  "#FC9D9D",
  "#FF2E63",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Salary", amount: 0, color: incomeColors[2] },
  { type: "Other", amount: 0, color: incomeColors[3] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Travel", amount: 0, color: expenseColors[1] },
  { type: "Food", amount: 0, color: expenseColors[2] },
  { type: "Shopping", amount: 0, color: expenseColors[3] },
  { type: "Entertainment", amount: 0, color: expenseColors[4] },
  { type: "Other", amount: 0, color: expenseColors[5] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
