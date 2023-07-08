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
  }, [index]);

  const saveResponse = () => {
    const payload = [index, response];
    dispatch(surveySlice.actions.enterResponse(payload));
  };

  const navigateBack = () => {
    saveResponse();
    // Navigate to the previous question page, if there is one.
    const route = index > 0 ? `/survey/${index - 1}` : "/";
    navigate(route);
  };

  const navigateNext = (event) => {
    event.preventDefault();

    saveResponse();
    // Navigate to the next question page, if there is one.
    const route =
      index + 1 < survey.length ? `/survey/${index + 1}` : "/survey/review";
    navigate(route);
  };

  return (
    <form
      onSubmit={navigateNext}
      className="flex flex-col justify-between items-center gap-5"
    >
      <h2>{survey[index].question}</h2>
      <input
        type={survey[index].type}
        required={survey[index].type === "number"}
        min="1"
        max="5"
        value={response}
        onChange={(event) => setResponse(event.target.value)}
      />
      <div>
        <button
          type="button"
          onClick={navigateBack}
          className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-l"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </form>
  );
}
