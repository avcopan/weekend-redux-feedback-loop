import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import surveySlice from "../state/surveySlice";

export function SurveySuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restartSurvey = () => {
    dispatch(surveySlice.actions.reset());
    navigate("/");
  }

  return (
    <div>
      <h2>Thanks for your feedback!</h2>
      <button onClick={restartSurvey}>Leave New Feedback</button>
    </div>
  );
}
