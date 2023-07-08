import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSurvey } from "../modules/request";
import { makeRequestBodyFromSurvey } from "../modules/util";
import { capitalizeFirstLetter } from "../modules/util";

export function SurveyReview() {
  const navigate = useNavigate();
  const survey = useSelector((store) => store.survey);

  const navigateBack = () => {
    const route = `/survey/${survey.length - 1}`;
    navigate(route);
  };

  const submitSurvey = () => {
    const requestBody = makeRequestBodyFromSurvey(survey);
    addSurvey(requestBody);
    navigate("/survey/success");
  };

  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <h2>Review your feedback</h2>
      <table>
        <thead>
          <tr className="bg-slate-300">
            <th>Topic</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {survey.map((item, index) => {
            return (
              <tr key={index} className="odd:bg-white even:bg-slate-100">
                <td>{capitalizeFirstLetter(item.key)}</td>
                <td>{item.response}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button
          onClick={navigateBack}
          className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-l"
        >
          Back
        </button>
        <button
          onClick={submitSurvey}
          className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded-r"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
