import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import surveySlice from "../state/surveySlice";

export function SurveyQuestion({ index }) {

  const survey = useSelector((store) => store.survey);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  useEffect(() => {
    setResponse(survey[index].response);
  }, [index])

  const saveResponse = () => {
    const payload = [index, response];
    dispatch(surveySlice.actions.enterResponse(payload));
  }

  const navigatePrevious = () => {
    saveResponse();
    // Navigate to the previous question page, if there is one.
    const route = index > 0 ? `/survey/${index - 1}` : "/";
    navigate(route);
  };

  const navigateNext = () => {
    saveResponse();
    // Navigate to the next question page, if there is one.
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
      <button onClick={navigatePrevious}>Previous</button>
      <button onClick={navigateNext}>Next</button>
    </>
  );
}
