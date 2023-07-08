import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSurvey } from "../modules/request";
import { makeRequestBodyFromSurvey } from "../modules/util";

export function SurveyReview() {
  const navigate = useNavigate();
  const survey = useSelector((store) => store.survey);

  const handleClickSubmit = () => {
    const requestBody = makeRequestBodyFromSurvey(survey);
    addSurvey(requestBody);
    navigate("/survey/success");
  };

  return (
    <div>
      <h2>Review Your Feedback</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {survey.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.key}</td>
                <td>{item.response}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleClickSubmit}>Submit</button>
    </div>
  );
}
