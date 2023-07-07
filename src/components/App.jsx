import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { SurveyQuestion } from "../pages/SurveyQuestion";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/1" element={<SurveyQuestion page={1} />} />
          <Route path="/survey/2" element={<SurveyQuestion page={2} />} />
          <Route path="/survey/3" element={<SurveyQuestion page={3} />} />
          <Route path="/survey/4" element={<SurveyQuestion page={4} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
