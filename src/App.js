import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";
import Installment from "./components/Installment";

export default function App() {
  const [initialAmount, setInitialAmount] = useState(""); //capital inicial
  const [monthlyTax, setMonthlyTax] = useState(""); //taxa mensal de juros
  const [period, setPeriod] = useState(""); //qtde de meses
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    const newInstallments = [];

    for (let i = 1; i <= period; i++) {
      const calc = (initialAmount * (1 + monthlyTax / 100) ** i).toFixed(2);
      let perc = (calc - initialAmount).toFixed(2);
      const percentFinal = ((perc / initialAmount) * 100).toFixed(2);

      const color = `${monthlyTax} < 0 ? ((${calc} && ${perc} && ${percentFinal}) === 'red') : ((${calc} && ${perc} === 'green') && ${percentFinal} === 'blue')}`;

      newInstallments.push({
        id: i,
        calc,
        perc,
        percentFinal,
      });
    }
    setInstallments(newInstallments);
  }, [initialAmount, monthlyTax, period]);

  const handleChangeInitialMount = (newInitialMount) => {
    setInitialAmount(newInitialMount);
  };

  const handleChangeMonthyTax = (newMonthlyTax) => {
    setMonthlyTax(newMonthlyTax);
  };
  const handleChangeMonth = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div className="container">
      <h1 className="center-align ">React - Juros Compostos</h1>
      <Form
        initialAmount={initialAmount}
        monthlyTax={monthlyTax}
        period={period}
        onChangeInitialMount={handleChangeInitialMount}
        onChangeMonthlyTax={handleChangeMonthyTax}
        onChangeMonth={handleChangeMonth}
      />
      <Installments>
        {installments.map((installment, index) => {
          return (
            <Installment key={`${installment}_${index}`}>
              {installment}
            </Installment>
          );
        })}
      </Installments>
    </div>
  );
}
