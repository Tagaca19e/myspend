const incomeColors = [
  "#86e7b8",
  "#93ff96",
  "#5ffac4",
  "#9ffcdc",
  "#76ff61",
  "#83d681",
  "#6dd660",
  "#c3ffe1",
  "#bfffe5",
];
const expenseColors = [
  "#FF4646",
  "#FF8585",
  "#FFB396",
  "#F05454",
  "#FA1616",
  "#EB6383",
  "#FF6363",
  "#FE346E",
  "#D63447",
  "#FC9D9D",
  "#FF2E63",
];

export const incomeCategories = [
  { type: "Business", amount: 0, color: incomeColors[0] },
  { type: "Investments", amount: 0, color: incomeColors[1] },
  { type: "Salary", amount: 0, color: incomeColors[6] },
  { type: "Other", amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: "Bills", amount: 0, color: expenseColors[0] },
  { type: "Car", amount: 0, color: expenseColors[1] },
  { type: "Clothes", amount: 0, color: expenseColors[2] },
  { type: "Travel", amount: 0, color: expenseColors[3] },
  { type: "Food", amount: 0, color: expenseColors[4] },
  { type: "Shopping", amount: 0, color: expenseColors[5] },
  { type: "House", amount: 0, color: expenseColors[6] },
  { type: "Entertainment", amount: 0, color: expenseColors[7] },
  { type: "Phone", amount: 0, color: expenseColors[8] },
  { type: "Pets", amount: 0, color: expenseColors[9] },
  { type: "Other", amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
