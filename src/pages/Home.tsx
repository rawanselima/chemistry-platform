import About from "../compontents/home/About";
import Courses from "../compontents/home/Courses";
import Feedback from "../compontents/home/Feedback";
import HeroSection from "../compontents/home/HeroSection";
import Levels from "../compontents/home/Levels";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Levels />
      <Courses />
      <About />
      <Feedback />
    </main>
  );
};

export default Home;
