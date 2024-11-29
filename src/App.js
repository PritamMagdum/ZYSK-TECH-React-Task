import AdvanceAnalyticsSection from "./Components/AdvanceAnalyticsSection";
import AnalyticsSection from "./Components/AnalyticsSection";
import BlogSection from "./Components/BlogSection";
import CTASection from "./Components/CTASection";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Footer";
import FreqAskQuestions from "./Components/FreqAskQuestions";
import Header from "./Components/Header";
import TestimonialSection from "./Components/TestimonialSection";
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
      <BlogSection />
      <CTASection />
      <Footer />
    </Router>
  );
}

export default App;
