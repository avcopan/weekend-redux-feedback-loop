import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    key: "feeling",
    type: "number",
    question: "How are you feeling today?",
    response: "",
  },
  {
    key: "understanding",
    type: "number",
    question: "How well are you understanding the content?",
    response: "",
  },
  {
    key: "support",
    type: "number",
    question: "How well are you being supported?",
    response: "",
  },
  {
    key: "comments",
    type: "text",
    question: "Any comments you have?",
    response: "",
  },
];

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    enterResponse(state, action) {
      const [index, response] = action.payload;
      console.log("index:", index);
      console.log("response:", response);
      // This state-mutating syntax doesn't actually mutate state, because RTK
      // uses Immer
      state[index].response = response;
    },
    reset() {
      return initialState;
    },
  },
});

export default surveySlice;
