import { createSlice } from "@reduxjs/toolkit";

const BLANK_SURVEY = [
  {
    key: "feeling",
    question: "How are you feeling today?",
    response: '',
  },
  {
    key: "understanding",
    question: "How well are you understanding the content?",
    response: '',
  },
  {
    key: "support",
    question: "How well are you being supported?",
    response: '',
  },
  {
    key: "comments",
    question: "Any comments you have?",
    response: '',
  },
];

const surveySlice = createSlice({
  name: "survey",
  initialState: BLANK_SURVEY,
  reducers: {
    enterResponse(state, action) {
      const [index, response] = action.payload;
      console.log("index:", index);
      console.log("response:", response);
      // This state-mutating syntax doesn't actually mutate state, because RTK
      // uses Immer
      state[index].response = response;
    },
  },
});

export default surveySlice;