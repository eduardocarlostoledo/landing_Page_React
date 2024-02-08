import "./App.css";
import NavBar from "./components/NavBar";
import Articles from "./components/views/Articles";
import Features from "./components/views/Features";
import Gallery from "./components/views/Gallery";
import HeroSection from "./components/views/HeroSection";
import LatestEvents from "./components/views/LatestEvents";
import OurWorks from "./components/views/OurWorks";
import Services from "./components/views/Services";
import TeamMembers from "./components/views/TeamMembers";
import Testimonials from "./components/views/Testimonials";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Articles />
      <Gallery />
      <Features />
      <Testimonials />
      <TeamMembers />
      <Services />
      <OurWorks />
      <LatestEvents />
    </div>
  );
}

export default App;
