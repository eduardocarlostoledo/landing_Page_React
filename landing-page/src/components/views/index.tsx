import "../../App.css";
import { NavBar } from "../../components/NavBar";
import { Articles } from "../../components/views/Articles";
import { Features } from "../../components/views/Features";
import { Gallery } from "../../components/views/Gallery";
import { HeroSection } from "../../components/views/HeroSection";
import { LatestEvents } from "../../components/views/LatestEvents";
import { OurSkills } from "../../components/views/OurSkills";
import { OurStats } from "../../components/views/OurStats";
import { OurWorks } from "../../components/views/OurWorks";
import { Plans } from "../../components/views/Plans";
import { Services } from "../../components/views/Services";
import { TeamMembers } from "../../components/views/TeamMembers";
import { Testimonials } from "../../components/views/Testimonials";
import { TopVideo } from "../../components/views/TopVideo";
import { Request } from "../../components/views/Request";
import { Footer } from "../../components/Footer";

const HomePage = () => {
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
      <OurSkills />
      <OurWorks />
      <LatestEvents />
      <Plans />
      <TopVideo />
      <OurStats />
      <Request />
      <Footer />
    </div>
  );
};

export default HomePage;
