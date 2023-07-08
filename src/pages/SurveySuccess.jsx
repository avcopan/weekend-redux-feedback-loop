import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import surveySlice from "../state/surveySlice";

export function SurveySuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restartSurvey = () => {
    dispatch(surveySlice.actions.reset());
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <h2>Thanks for your feedback!</h2>
      <button
        onClick={restartSurvey}
        className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-r"
      >
        Leave New Feedback
      </button>
    </div>
  );
}
