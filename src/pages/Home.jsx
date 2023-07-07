import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const navigateToSurvey = () => {
    navigate("/survey/0");
  };
  return <button onClick={navigateToSurvey}>Start Survey</button>;
}
