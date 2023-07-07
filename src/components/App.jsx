import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home";
import { SurveyQuestion } from "../pages/SurveyQuestion";
import { SurveyReview } from "../pages/SurveyReview";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/0" element={<SurveyQuestion index={0} />} />
          <Route path="/survey/1" element={<SurveyQuestion index={1} />} />
          <Route path="/survey/2" element={<SurveyQuestion index={2} />} />
          <Route path="/survey/3" element={<SurveyQuestion index={3} />} />
          <Route path="/survey/review" element={<SurveyReview />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
