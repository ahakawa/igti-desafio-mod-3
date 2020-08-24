import React from "react";

export default function Form({
  initialAmount,
  monthlyTax,
  period,
  onChangeInitialMount,
  onChangeMonthlyTax,
  onChangeMonth,
}) {
  const handleChangeInitialMount = (event) => {
    const newInitialMount = +event.target.value;
    onChangeInitialMount(newInitialMount);
  };

  const handleChangeMonthlyTax = (event) => {
    const newMonthlyTax = +event.target.value;
    onChangeMonthlyTax(newMonthlyTax);
  };

  const handleChangeMonth = (event) => {
    const newMonth = +event.target.value;
    onChangeMonth(newMonth);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label htmlFor="initialMountLabel">Montante inicial:</label>
          <input
            type="number"
            min="1"
            max="100000"
            onChange={handleChangeInitialMount}
          />
        </div>
        <div className="col">
          <label htmlFor="monthlyTaxtLabel">Taxa de juros mensal:</label>
          <input
            type="number"
            min="-12"
            max="12"
            onChange={handleChangeMonthlyTax}
          />
        </div>
        <div className="col">
          <label htmlFor="monthLabel">Período (meses):</label>
          <input type="number" min="1" max="36" onChange={handleChangeMonth} />
        </div>
      </div>
    </div>
  );
}
