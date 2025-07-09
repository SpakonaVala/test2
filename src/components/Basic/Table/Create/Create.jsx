import React from "react";
import styles from './Create.module.css';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOperator, setSelectedTelecomType, setUserName, setRequestTableText, addRequest } from "../../../../redux/CreatePage-reducer";

const Create = () => {
  const dispatch = useDispatch();

  // Забираем данные из Redux
  const { telecomOperator, serviceType, selectedOperator, selectedTelecomType, userName, requestTableText, requestData } =
    useSelector((state) => state.createPage);

  // Обработчики событий
  const handleOperatorChange = (e) => dispatch(setSelectedOperator(e.target.value));
  const handleTypeChange = (e) => dispatch(setSelectedTelecomType(e.target.value));
  const handleUserNameChange = (e) => dispatch(setUserName(e.target.value));
  const handleRequestTextChange = (e) => dispatch(setRequestTableText(e.target.value));
  const handleAddRequest = () => dispatch(addRequest());

  return (
    <div className={styles.create}>
      <div>
        <label>Выберите оператора:</label>
        <select value={selectedOperator || ""} onChange={handleOperatorChange}>
          <option value="" disabled>Выберите...</option>
          {telecomOperator.map((v) => (
            <option key={v.id} value={v.operatorName}>{v.operatorName}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Имя:</label>
        <textarea value={userName} onChange={handleUserNameChange} placeholder="Введите имя..." />
      </div>

      <div>
        <label>Telecom Type:</label>
        <select value={selectedTelecomType || ""} onChange={handleTypeChange}>
          <option value="" disabled>Выберите...</option>
          {serviceType.map((t) => (
            <option key={t.id} value={t.telecomType}>{t.telecomType}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Request Text:</label>
        <textarea value={requestTableText} onChange={handleRequestTextChange} placeholder="Введите текст заявки..." />
      </div>

      <div>
        <button onClick={handleAddRequest}>Add Request</button>
      </div>

      {/* Отображение заявок */}
            <table className={styles.table}>
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          {requestData.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.operatorName}</td>
              <td>{req.UserName}</td>
              <td>{req.telecomType}</td>
              <td>{req.timeType}</td>
              <td>{req.requestTableText}</td>
              <td>{req.threeСreatedNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Create;


