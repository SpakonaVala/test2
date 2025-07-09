import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  telecomOperator: [
    { id: "1", operatorName: "MTS", operatorNumber: "1" },
    { id: "2", operatorName: "Beeline", operatorNumber: "2" },
    { id: "3", operatorName: "Megafon", operatorNumber: "3" },
    { id: "4", operatorName: "Tele2", operatorNumber: "4" },
    { id: "5", operatorName: "MTT", operatorNumber: "5" },
    { id: "6", operatorName: "Er-telecom", operatorNumber: "6" },
    { id: "7", operatorName: "Orange", operatorNumber: "7" },
    { id: "8", operatorName: "RTK", operatorNumber: "8" },
    { id: "9", operatorName: "Other", operatorNumber: "9" },
  ],

  selectedOperator: null,
  selectedTelecomType: null,
  userName: "", // Поле для имени
  requestTableText: "", // Поле для текста заявки

  serviceType: [
    { id: "1", telecomType: "Internet" },
    { id: "2", telecomType: "Telephony" },
    { id: "3", telecomType: "Mobile" },
    { id: "4", telecomType: "SMS" },
    { id: "5", telecomType: "Payment" },
    { id: "6", telecomType: "QuestionOther" },
  ],

  requestData: [
    {
      id: "1",
      threeСreatedNumber: "1a01",
      operatorName: "MTS",
      UserName: "a",
      telecomType: "Internet",
      serviceType: "Mobile",
      timeType: "01/01/2024",
      requestTableText: "",
      activeStatus: true,
    },
  ],
};

const createPageSlice = createSlice({
  name: "createPage",
  initialState,
  reducers: {
    // Функция генерации номера запроса
    generateThreeCreatedNumber: (state) => {
      if (!state.selectedOperator || !state.userName.trim()) {
        return "";
      }

      // 1️⃣ Получаем operatorNumber
      const operator = state.telecomOperator.find(op => op.operatorName === state.selectedOperator);
      const operatorNumber = operator ? operator.operatorNumber : "0";

      // 2️⃣ Получаем первую букву userName (в нижнем регистре)
      const userLetter = state.userName.trim().charAt(0).toLowerCase() || "x";

      // 3️⃣ Генерируем ID (с добавлением 0, если меньше 100)
      const newId = state.requestData.length + 1;
      const formattedId = newId < 100 ? String(newId).padStart(3, "0") : String(newId);

      // 4️⃣ Объединяем все в строку
      return `${operatorNumber}${userLetter}${formattedId}`;
    },

    // Добавление новой заявки
    addRequest: (state) => {
      if (!state.selectedOperator || !state.selectedTelecomType || !state.userName.trim()) {
        return;
      }

      const newRequest = {
        id: String(state.requestData.length + 1),
        threeСreatedNumber: createPageSlice.caseReducers.generateThreeCreatedNumber(state), // Генерация номера
        operatorName: state.selectedOperator,
        UserName: state.userName,
        telecomType: state.selectedTelecomType,
        timeType: new Date().toISOString().split("T")[0],
        requestTableText: state.requestTableText,
        activeStatus: true,
      };

      state.requestData.push(newRequest);

      // Сбрасываем поля
      state.selectedOperator = null;
      state.selectedTelecomType = null;
      state.userName = "";
      state.requestTableText = "";
    },

    setSelectedOperator: (state, action) => {
      state.selectedOperator = action.payload;
    },

    setSelectedTelecomType: (state, action) => {
      state.selectedTelecomType = action.payload;
    },

    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    setRequestTableText: (state, action) => {
      state.requestTableText = action.payload;
    },
  },
});

export const { addRequest, setSelectedOperator, setSelectedTelecomType, setUserName, setRequestTableText } = createPageSlice.actions;
export default createPageSlice.reducer;