import "./Layout.css";

export function Layout({ children }) {
  return (
    <div className="Layout">
      <header className="Layout-header">
        <h1 className="Layout-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      {children}
    </div>
  );
}
