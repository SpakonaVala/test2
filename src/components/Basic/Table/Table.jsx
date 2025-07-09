import React from "react";
import styles from "./Table.module.css"
import Create from "../Table/Create/Create";

const Table = (props) => {
  return (
    <div className={styles.tableContainer}>
      <div><Create /></div>
      <table className={styles.table}>
        <thead>
          <tr>
            {props.state.tablePage.columnTable.map((column) => (
              <th key={column.id} className={styles.tableHeader}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Пример строки данных, можно заменить на реальные данные */}
          <tr>
          {props.state.tablePage.columnTable.map((column) => (
              <td key={column.id} className={styles.tableCell}>
                Data for {column.label}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

