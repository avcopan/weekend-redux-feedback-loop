import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: {},
  reducers: {
    setFeeling(state, action) {
      console.log("in 1");
      return { ...state, feeling: action.payload };
    },
    setUnderstanding(state, action) {
      console.log("in 2");
      return { ...state, understanding: action.payload };
    },
    setSupport(state, action) {
      console.log("in 3");
      return { ...state, support: action.payload };
    },
    setComments(state, action) {
      console.log("in 4");
      return { ...state, comments: action.payload };
    },
  },
});

export default surveySlice;