import "./App.css";
import NavBar from "./components/NavBar";
import Articles from "./components/views/Articles";
import Features from "./components/views/Features";
import Gallery from "./components/views/Gallery";
import HeroSection from "./components/views/HeroSection";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Articles />
      <Gallery />
      <Features />
    </div>
  );
}

export default App;
