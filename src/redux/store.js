import DialogsPageReducer from "./DialogsPage-reducer";
import tablePageReducer from "./tablePage-reducer";
import mainHallPageReducer from "./mainHallPage-reducer";

let store = {
  _state: {
    mainHallPage: {

      postsData: [
        { id: '1', post: 'hi how are you', likeCount: 0 },
        { id: '2', post: 'first post', likeCount: 1 },
        { id: '3', post: 'you are magic', likeCount: 30 }
      ],
      newPostText: 'ru ru',
    },


    DialogsPage: {
      messageData: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'Go' },
        { id: '3', message: 'loly' },
        { id: '4', message: 'pop' }
      ],
      dialogs: [
        { id: '1', name: 'Viktor' },
        { id: '2', name: 'Alena' },
        { id: '3', name: 'Daria' },
        { id: '4', name: 'Snowcat' }
      ],
      newMessageData: 'pop',
    },

    tablePage: {

      telecomOperator: [
        { id: '1', operatorName: 'MTS', operatorNumber: '1' },
        { id: '2', operatorName: 'Beeline', operatorNumber: '2' },
        { id: '3', operatorName: 'Megafon', operatorNumber: '3' },
        { id: '4', operatorName: 'Tele2', operatorNumber: '4' },
        { id: '5', operatorName: 'MTT', operatorNumber: '5' },
        { id: '6', operatorName: 'Er-telecom', operatorNumber: '6' },
        { id: '7', operatorName: 'Orange', operatorNumber: '7' },
        { id: '8', operatorName: 'RTK', operatorNumber: '8' },
        { id: '9', operatorName: 'Other', operatorNumber: '9' },
      ],

      serviceType: [
        { id: '1', telecomType: 'Internet' },
        { id: '2', telecomType: 'Telephony' },
        { id: '3', telecomType: 'Mobile' },
        { id: '4', telecomType: 'SMS' },
        { id: '5', telecomType: 'Payment' },
        { id: '6', telecomType: 'QuestionOther' },
      ],

      requestData: [
        { id: '1', operatorName: 'MTS', UserName: 'a', telecomType: 'Internet', timeType: '01/01/2024', requestTableText: '' },
      ],

      requestText: 'lol',


      columnTable: [
        { id: '1', label: 'Number' },
        { id: '2', label: 'OperatorName' },
        { id: '3', label: 'UserName' },
        { id: '4', label: 'TimeDate' },
        { id: '5', label: 'Tema' },
        { id: '6', label: 'ServiceType' },
        { id: '7', label: 'Status' },
        { id: '8', label: 'Optional' },
      ],

      requestStatus: [
        { id: '1', status: 'Done' },
        { id: '2', status: 'AtWork' },
        { id: '3', status: 'Delete' },
        { id: '4', label: 'Archive' },
      ]
    },
  },



  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.DialogsPage = DialogsPageReducer(this._state.DialogsPage, action);
    this._state.tablePage = tablePageReducer(this._state.tablePage, action);
    this._state.mainHallPage = mainHallPageReducer(this._state.mainHallPage, action);

    this._callSubscriber(this._state);
  }
}


  export default store;