import { useNavigate } from "react-router-dom";

export function Layout({ children }) {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex-1 container mx-auto bg-slate-200 rounded-xl p-8 m-10">
      <header>
        <h1
         className="mb-4 text-4xl text-center"
          onClick={navigateHome}>
          Feedback
        </h1>
      </header>
      {children}
    </div>
  );
}
