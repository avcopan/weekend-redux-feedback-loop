import { useNavigate } from "react-router-dom";
import "./Layout.css";

export function Layout({ children }) {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="Layout">
      <header className="Layout-header">
        <h1 className="Layout-title" onClick={navigateHome}>
          Feedback!
        </h1>
        <h4>Don't forget it!</h4>
      </header>
      {children}
    </div>
  );
}
