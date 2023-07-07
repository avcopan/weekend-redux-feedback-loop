import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleNextClick = () => {
    // Update the store
    dispatch(SURVEY[page].action(inputValue));
    setInputValue("");

    // Navigate to the next question page, if there is one.
    // Otherwise, navigate to the survey review page.
    const route =
      page + 1 < SURVEY.length ? `/survey/${page + 1}` : "/survey/review";
    navigate(route);
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
    </>
  );
}
