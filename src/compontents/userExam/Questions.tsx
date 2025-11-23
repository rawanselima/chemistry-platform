import Form from "@/pattern/form/Form";
import Button from "../common/Button";

const Questions = () => {
  return (
    <section className="md:w-3/4 w-full  mx-auto">
      <div className=" bg-white rounded-lg p-5">
        <div>
          <h1 className="font-bold text-3xl text-dark-purple mb-5">
            ما هو ناتج 5 + 3 × 2؟
          </h1>
        </div>
        <Form>
          <label className="flex items-center text-xl my-2 border-2 border-light-purple rounded-lg p-3 cursor-pointer hover:bg-light-purple duration-300 transition-all">
            <Form.Input name="answer" type="radio" style="h-5 w-5" />
            <Form.Label label="الاجابه-1" />
          </label>
          <label
            className={`flex items-center text-xl my-2 border-2 border-light-purple rounded-lg p-3 cursor-pointer hover:bg-light-purple duration-300 transition-all`}
          >
            <Form.Input
              name="answer"
              type="radio"
              style="h-5 w-5"
              checked={true}
            />
            <Form.Label label="الاجابه-1" />
          </label>
          <label className="flex items-center text-xl my-2 border-2 border-light-purple rounded-lg p-3 cursor-pointer hover:bg-light-purple duration-300 transition-all">
            <Form.Input name="answer" type="radio" style="h-5 w-5" />
            <Form.Label label="الاجابه-1" />
          </label>
        </Form>
      </div>

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
