import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageData: [
    { id: "1", message: "Hi" },
    { id: "2", message: "Go" },
    { id: "3", message: "Loly" },
    { id: "4", message: "Pop" },
  ],
  dialogs: [
    { id: "1", name: "Viktor" },
    { id: "2", name: "Alena" },
    { id: "3", name: "Daria" },
    { id: "4", name: "Snowcat" },
  ],
  newMessageData: "pop",
};

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    addMessage: (state) => {
      state.messageData = [
        ...state.messageData,
      { id: 7,
        message: state.newMessageData,
      }];
      state.newMessageData = "";
    },
    updateNewMessageData: (state, action) => {
      state.newMessageData = action.payload;
    },
  },
});

export const { addMessage, updateNewMessageData } = dialogsSlice.actions;
export default dialogsSlice.reducer;




