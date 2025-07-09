import React from "react";
import styles from "./MessagesUser.module.css";


const MessagesUser = (props) => {
   
  return (
        <div>
          <div></div>
            <div className={styles.messagesBlock}>{props.message}</div>
    </div>
  )
}

export default MessagesUser