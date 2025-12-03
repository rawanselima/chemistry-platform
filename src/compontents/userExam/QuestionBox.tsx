import Form from "@/pattern/form/Form";

const QuestionBox = () => {
  return (
    <div className=" bg-white rounded-lg p-5">
      <div>
        <h1 className="font-bold text-3xl text-dark-purple mb-5">
          ما هو ناتج 5 + 3 × 2؟
        </h1>
      </div>
      <Form>
        <label className="flex items-center text-xl my-2 border-2 border-light-purple rounded-lg p-3 cursor-pointer hover:bg-light-purple duration-300 transition-all">
          <Form.Input name="answer" type="radio" style="h-5 w-5" />
          <Form.Label htmlFor="answer" label="الاجابه-1" />
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
          <Form.Label htmlFor="answer" label="الاجابه-1" />
        </label>
        <label className="flex items-center text-xl my-2 border-2 border-light-purple rounded-lg p-3 cursor-pointer hover:bg-light-purple duration-300 transition-all">
          <Form.Input name="answer" type="radio" style="h-5 w-5" />
          <Form.Label htmlFor="answer" label="الاجابه-1" />
        </label>
      </Form>
    </div>
  );
};

export default QuestionBox;
