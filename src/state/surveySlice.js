import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: {},
  reducers: {
    setFeeling(state, action) {
      return { ...state, feeling: action.payload };
    },
    setUnderstanding(state, action) {
      return { ...state, understanding: action.payload };
    },
    setSupport(state, action) {
      return { ...state, support: action.payload };
    },
    setComments(state, action) {
      return { ...state, comments: action.payload };
    },
  },
});

export default surveySlice;