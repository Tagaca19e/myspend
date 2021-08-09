import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying:
      <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "10 " : "20 "} dollars under salary
    </div>
  );
};

export default InfoCard;
