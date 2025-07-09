import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
  
};

// const createPageSlice = createSlice({
//   name: "createPage",
//   initialState,
//   reducers: {
//     workRequest: (state) => {
//       state.requestData = state.requestData.filter((r) => r.activeStatus === true);
//     },

//     addRequest: (state, action) => {
//       state.requestData.push({
//         id: String(state.requestData.length + 1),
//         ...action.payload,
//         activeStatus: true,
//       });
//     },

//     setSelectedOperator: (state, action) => {
//       state.selectedOperator = action.payload;
//     },

//     setSelectedTelecomType: (state, action) => {
//       state.selectedTelecomType = action.payload;
//     },

//     setSelectedServiceType: (state, action) => {
//       state.selectedServiceType = action.payload;
//     },

//     setRequestText: (state, action) => {
//       state.requestText = action.payload;
//     },
//   },
// });

// export const {
//   workRequest,
//   addRequest,
//   setSelectedOperator,
//   setSelectedTelecomType,
//   setSelectedServiceType,
//   setRequestText,
// } = createPageSlice.actions;

// export default createPageSlice.reducer;

