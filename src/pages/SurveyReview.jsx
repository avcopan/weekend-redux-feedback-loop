import { useSelector } from "react-redux";

export function SurveyReview() {
  const survey = useSelector((store) => store.survey);

  const handleClickSubmit = () => {
    console.log("You clicked submit!");
  }

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
                <td>{item.topic}</td>
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
