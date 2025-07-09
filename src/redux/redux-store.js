import { configureStore } from "@reduxjs/toolkit";
import dialogsSlice from "./DialogsPage-reducer";
import mainHallSlice from "./mainHallPage-reducer";
import createPageSlice from "./CreatePage-reducer";

const store = configureStore({
  reducer: {
    createPage: createPageSlice,
    mainHall: mainHallSlice,
    dialogs: dialogsSlice,
  },
});

export default store;







