import React from "react";

export default function Installments({ children }) {
  return <div style={styles.flexRow}>{children}</div>;
}

const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexFlow: " row wrap",
    alignItems: "flex-start",
  },
};
