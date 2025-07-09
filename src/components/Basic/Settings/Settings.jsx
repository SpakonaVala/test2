import React from "react";
import styles from './Settings.module.css';

const Settings = (props) => {
  return (
    <div className={styles.settingsContainer}>
      {/* Таблица для telecomOperator */}
      <h2 className={styles.title}>Telecom Operators</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Operator Name</th>
            <th>Operator Number</th>
          </tr>
        </thead>
        <tbody>
          {props.state.tablePage.telecomOperator.map((operator) => (
            <tr key={operator.id}>
              <td>{operator.id}</td>
              <td>{operator.operatorName}</td>
              <td>{operator.operatorNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Таблица для serviceType */}
      <h2 className={styles.title}>Service Types</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Telecom Type</th>
          </tr>
        </thead>
        <tbody>
          {props.state.tablePage.serviceType.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.telecomType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Settings;