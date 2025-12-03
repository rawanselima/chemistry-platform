import Button from "../common/Button";
import QuestionBox from "./QuestionBox";

const Questions = () => {
  return (
    <section className="md:w-3/4 w-full  mx-auto">
      <QuestionBox />

      <div className="flex justify-between items-center my-5 bg-white p-5 rounded-lg">
        <Button style="solid" width="fit" size="medium">
          التالي
        </Button>
        <Button style="outline" width="fit" size="medium">
          السابق
        </Button>
      </div>

      <div className="bg-white p-5 rounded-lg">
        <h2 className="font-bold text-xl text-dark-purple pb-5"> الأسئلة </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="medium" style="solid" width="fit">
            1
          </Button>
          <Button size="medium" style="outline" width="fit">
            2
          </Button>
          <Button size="medium" style="solved" width="fit">
            3
          </Button>
          <Button size="medium" style="wrong" width="fit">
            3
          </Button>
          <Button size="medium" style="correct" width="fit">
            3
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
