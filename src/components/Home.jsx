import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/survey/1");
  };
  return <button onClick={handleOnClick}>Start Survey</button>;
}
