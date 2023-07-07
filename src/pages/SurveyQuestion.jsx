import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import surveySlice from "../state/surveySlice";

const SURVEY = [
  {
    question: "How are you feeling today?",
    action: surveySlice.actions.setFeeling,
  },
  {
    question: "How well are you understanding the content?",
    action: surveySlice.actions.setUnderstanding,
  },
  {
    question: "How well are you being supported?",
    action: surveySlice.actions.setSupport,
  },
  {
    question: "Any comments you have?",
    action: surveySlice.actions.setComments,
  },
];

export function SurveyQuestion({ page }) {
  const dispatch = useDispatch();
  const survey = useSelector((store) => store.survey);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleNextClick = () => {
    console.log("HERE! DISPATCHING!");
    dispatch(SURVEY[page].action(inputValue));
    setInputValue("");
    navigate(`/survey/${page + 1}`);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h2>{SURVEY[page].question}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <button onClick={handleNextClick}>Next</button>
      <br />
      {JSON.stringify(survey)}
    </>
  );
}
