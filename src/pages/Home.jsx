import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const navigateToSurvey = () => {
    navigate("/survey/0");
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <button
        onClick={navigateToSurvey}
        className="bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold py-2 px-4 rounded"
      >
        Start Survey
      </button>
    </div>
  );
}
