import React from "react";
import styles from "./Dialogs.module.css";
import DialogsUser from "./DialogsUser/DialogsUser";
import MessagesUser from "./Messages/MessagesUser";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, updateNewMessageData } from "../../../redux/DialogsPage-reducer";


const DialogsContainer = () => {
  const dispatch = useDispatch();
  const { dialogs, messageData, newMessageData } = useSelector(state => state.dialogs);

  const DialogsElements = dialogs.map(d => <DialogsUser key={d.id} name={d.name} id={d.id} />);
  const MessageElements = messageData.map(m => <MessagesUser key={m.id} message={m.message} id={m.id} />);
  
  const onSendMessageClick = () => {
    dispatch(addMessage());
  };

  const onNewMessageChange = (e) => {
    dispatch(updateNewMessageData(e.target.value));
  };

    return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsSidebar}>
        {DialogsElements}
      </div>
      <div>
        <div className={styles.messagesBlock}>
          <p>Create New</p>
          <textarea 
            value={newMessageData} 
            onChange={onNewMessageChange} 
            placeholder="Enter message"
          />
          <button onClick={onSendMessageClick}>Save Message</button>
        </div>
        <div className={styles.messagesBlock}>
          {MessageElements}
        </div>
      </div>
    </div>
  );
};
  

export default DialogsContainer;



// const Dialogs = ({ dialogs, messageData, newMessageData, onSendMessageClick, onNewMessageChange }) => {
//   const DialogsElements = dialogs.map(d => <DialogsUser key={d.id} name={d.name} id={d.id} />);
//   const MessageElements = messageData.map(m => <MessagesUser key={m.id} message={m.message} id={m.id} />);

//   return (
//     <div className={styles.dialogs}>
//       <div className={styles.dialogsSidebar}>
//         {DialogsElements}
//       </div>
//       <div>
//         <div className={styles.messagesBlock}>
//           <p>Create New</p>
//           <textarea 
//             value={newMessageData} 
//             onChange={(e) => onNewMessageChange(e.target.value)} 
//             placeholder="Enter message"
//           />
//           <button onClick={onSendMessageClick}>Save Message</button>
//         </div>
//         <div className={styles.messagesBlock}>
//           {MessageElements}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dialogs;





// // import React from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import Dialogs from "./Dialogs";
// // import { updateNewMessageDataActionCreator,addMessageActionCreator } from "../../../redux/DialogsPage-reducer";


// // let mapStateToProps = (state)=> {
// //         return {
// //         DialogsPage: state.DialogsPage,
// //         newPostText: state.newPostText
// //     }
// // }

// // let mapDispatchToProps = (dispatch)=> {
// //     return {
// //         updateNewMessageData: (text) => {
// //             dispatch(updateNewMessageDataActionCreator(text));
// //                     },
// //         sentMessage: (text) => {
// //             dispatch(addMessageActionCreator());
// //         }
// //     }
// // }



// // const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

// // export default DialogsContainer;

 




