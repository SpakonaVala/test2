import { createSlice } from "@reduxjs/toolkit";

let initialState = {

  postsData: [
    { id: '1', post: 'hi how are you', likeCount: 0 },
    { id: '2', post: 'first post', likeCount: 1 },
    { id: '3', post: 'you are magic', likeCount: 30 }
  ],
  newPostText: 'ru ru',
};

const mainHallSlice = createSlice({
  name: "mainHall",
  initialState,
  reducers: {
    addPost: (state) => {
      state.postsData= [
        ...state.postsData,
        { id: 7,
        post: state.newPostText,
        likeCount: 0,
  }];
      state.newPostText = "";
    },
    updateNewPostText: (state, action) => {
      state.newPostText = action.payload;
    },
  },
});

export const { addPost, updateNewPostText } = mainHallSlice.actions;
export default mainHallSlice.reducer;
