import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SURVEY_DATA = {
  1: {
    question: "How are you feeling today?",
  },
  2: {
    question: "How well are you understanding the content?",
  },
  3: {
    question: "How well are you being supported?",
  },
  4: {
    question: "Any comments you have?",
  },
};

export function SurveyQuestion({ page }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const navigateToNextPage = () => {
    navigate(`/survey/${page + 1}`);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h2>{SURVEY_DATA[page].question}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <button onClick={navigateToNextPage}>Next</button>
    </>
  );
}
