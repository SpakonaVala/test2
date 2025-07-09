// import React from "react";
// import styles from "./NewMessageForm.module.css";
// import {updateNewMessageDataActionCreator, addMessageActionCreator} from "../../../../redux/DialogsPage-reducer"


// const NewMessageForm = (props) => {

//     let newMessageData = props.state.DialogsPage.newMessageData;
//     let newMessageElement = React.createRef();


//         let addMessage = () => {
//         props.dispatch(addMessageActionCreator());
//     };

//     let onMessageChange = () => {
//         let text = newMessageElement.current.value;
//         props.dispatch(updateNewMessageDataActionCreator(text));
//     };



    
//     return (
//         <div className={styles.messagesBlock}>
//             <p>create new</p>
//             <div><textarea onChange={onMessageChange} ref={newMessageElement} 
//             value={newMessageData} /> </div>
//             <button onClick={addMessage}>Save Message</button>
//             </div>
//     )
// }

// export default NewMessageForm;