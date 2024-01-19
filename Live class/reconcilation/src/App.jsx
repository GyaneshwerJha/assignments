import React, { useCallback, useEffect, useState, memo } from "react";

const App = () => {
  const [balance1, setBalance1] = useState({ returns: 0 });
  const [balance2, setBalance2] = useState({ returns: 0 });
  const [incomes, setIncome] = useState({ income: 0 });

  useEffect(() => {
    setBalance1({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setBalance2({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIncome({
        income: 100,
      });
    }, 5000);
  }, []);

  const calculateBalance = useCallback(() => {
    return balance1.returns + balance2.returns;
  }, [balance1, balance2]);

  return (
    <div>
      <BalanceCalculator calculateBalance={calculateBalance}></BalanceCalculator>
    </div>
  );
};

const BalanceCalculator = memo(({ calculateBalance }) => {
  console.log("balance child re-render");
  return <div>Your balance is {calculateBalance()}</div>;
});

export default App;
