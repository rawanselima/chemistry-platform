import Form from "@/pattern/form/Form";
import { CgAttachment } from "react-icons/cg";
import Button from "../common/Button";
import { FiSend } from "react-icons/fi";
import { AiFillAudio } from "react-icons/ai";

interface askProps {
  placeholder: string;
  role: string;
}
const Ask = ({ placeholder, role }: askProps) => {
  return (
    <section className="my-5 bg-white p-5 border-2 border-light-purple rounded-lg">
      <Form>
        <div className="flex items-center flex-wrap gap-5 ">
          <div className="xl:w-[80%] w-full relative">
            <div>
              <Form.Textarea
                placeholder={placeholder}
                name="question"
                style="w-full min-h-12"
              />
            </div>
            <div>
              <input type="file" name="photo" id="photo" className="hidden" />
              <label
                htmlFor="photo"
                className="text-xl text-gray cursor-pointer absolute  top-8 left-0 "
              >
                <CgAttachment />
              </label>
            </div>
            {role === "teacher" && (
              <div>
                <input type="file" name="audio" id="audio" className="hidden" />
                <label
                  htmlFor="audio"
                  className="text-xl text-gray cursor-pointer absolute top-8 left-7 "
                >
                  <AiFillAudio />
                </label>
              </div>
            )}
          </div>
          <Button
            size={window.innerWidth >= 665 ? "large" : "small"}
            style="solid"
            width="fit"
          >
            ارسال
            <FiSend />
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default Ask;
