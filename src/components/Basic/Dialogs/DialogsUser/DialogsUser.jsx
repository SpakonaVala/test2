import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogsUser = (props) => {
  return (
    <div className={styles.dialogsUser + " " + styles.active}>
      <NavLink
        to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default DialogsUser