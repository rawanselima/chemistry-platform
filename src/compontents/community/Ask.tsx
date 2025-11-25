import Form from "@/pattern/form/Form";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import Button from "../common/Button";
import { FiSend } from "react-icons/fi";
const Ask = () => {
  return (
    <section className="my-5 bg-white p-5 border-2 border-light-purple rounded-lg">
      <Form>
        <div className="flex items-center flex-wrap gap-5 ">
          <div className="xl:w-[80%] w-full relative">
            <div>
              <Form.Textarea
                placeholder="اكتب سؤالك هنا و شارك باستفسارك..."
                name="question"
                style="w-full min-h-12"
              />
            </div>
            <div>
              <input type="file" name="photo" id="photo" className="hidden" />
              <label
                htmlFor="photo"
                className="text-3xl text-gray cursor-pointer absolute  top-6 left-0 "
              >
                <MdOutlineDriveFolderUpload />
              </label>
            </div>
          </div>
          <Button size="large" style="solid" width="fit">
            ارسال
            <FiSend />
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Ask;