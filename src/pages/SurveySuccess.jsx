import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import surveySlice from "../state/surveySlice";

export function SurveySuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickNewFeedback = () => {
    dispatch(surveySlice.actions.reset());
    navigate("/survey/0");
  }

  return (
    <div>
      <h2>Thanks for your feedback!</h2>
      <button onClick={handleClickNewFeedback}>Leave New Feedback</button>
    </div>
  );
}
