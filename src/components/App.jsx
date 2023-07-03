import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { SurveyForm } from "./FeedbackQuestion";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/1" element={<SurveyForm page={1} />} />
          <Route path="/survey/2" element={<SurveyForm page={2} />} />
          <Route path="/survey/3" element={<SurveyForm page={3} />} />
          <Route path="/survey/4" element={<SurveyForm page={4} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
