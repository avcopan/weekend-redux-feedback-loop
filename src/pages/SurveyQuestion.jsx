import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import surveySlice from "../state/surveySlice";

export function SurveyQuestion({ page: index }) {
  const survey = useSelector((store) => store.survey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  const handleClick = () => {
    const payload = [index, response];
    setResponse("");

    // Enter the response to the store
    dispatch(surveySlice.actions.enterResponse(payload));

    // Navigate to the next question page, if there is one.
    // Otherwise, navigate to the survey review page.
    const route =
      index + 1 < survey.length ? `/survey/${index + 1}` : "/survey/review";
    navigate(route);
  };

  return (
    <>
      <h2>{survey[index].question}</h2>
      <input
        type="text"
        value={response}
        onChange={(event) => setResponse(event.target.value)}
      />
      <br />
      <button onClick={handleClick}>Next</button>
    </>
  );
}
