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

export function SurveyForm({ page }) {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate(`/survey/${page + 1}`);
  };

  return (
    <>
      <h2>{SURVEY_DATA[page].question}</h2>
      <button onClick={navigateToNextPage}>Next</button>
    </>
  );
}
