import React from "react";

export default function Installment({ children }) {
  const { id, calc, perc, percentFinal } = children;

  let formatter = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  console.log(id, perc, "id e perc");

  const calcPercColor = perc < 0 ? "red-text" : "green-text";
  const percentColor = perc < 0 ? "red-text" : "blue-text";

  return (
    <div
      className="card waves-effect waves-light lightgray"
      style={styles.flexRow}
    >
      <div className="row">
        <div className="col s1" style={styles.idStyle}>
          <h6>
            <strong>{id}</strong>
          </h6>
        </div>
        <div className="col s1" style={styles.dados}>
          <div className={calcPercColor}>{formatter.format(calc)}</div>
          <div className={calcPercColor}>{formatter.format(perc)}</div>
          <div className={percentColor}>{`${percentFinal}%`}</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: "160px",
    margin: "10px",
  },

  idStyle: {
    display: "flex",
    padding: "1.5rem 0.6rem",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
  },

  dados: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: "15px",
    minInlineSize: "80%",
    maxWidth: "100%",
  },
};
