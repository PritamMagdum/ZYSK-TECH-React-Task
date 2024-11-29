import AdvanceAnalyticsSection from "./Components/AdvanceAnalyticsSection";
import AnalyticsSection from "./Components/AnalyticsSection";
import FeaturesSection from "./Components/FeaturesSection";
import FreqAskQuestions from "./Components/FreqAskQuestions";
import Header from "./Components/Header";
import TestimonialSection from "./Components/TestimonialSection";
import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <AnalyticsSection />
      <FeaturesSection />
      <TestimonialSection />
      <AdvanceAnalyticsSection />
      <FreqAskQuestions />
    </Router>
  );
}

export default App;
