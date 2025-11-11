import TitleSection from "../common/TitleSection";
import FeedbackSlider from "./FeedbackSlider";

const Feedback = () => {
  return (
    <section className="bg-[url(/assets/mapBackground.webp)] bg-no-repeat bg-cover pt-5">
      <TitleSection>طلاب قالوا إيه عننا</TitleSection>
      <div>
        <FeedbackSlider />
      </div>
    </section>
  );
};

export default Feedback;
