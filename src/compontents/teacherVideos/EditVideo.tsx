import Modal from "@/components/ui/modal";
import Form from "@/pattern/form/Form";
import Button from "../common/Button";

type Lecture = {
  id: string;
  value: string;
};
function EditVideo({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const styleLabel: string =
    "font-bold text-dark-purple text-xl pr-3 my-3 block";
  const lectures: Lecture[] = [
    { id: "1", value: "الاسبوع الاول" },
    { id: "2", value: "الاسبوع الثاني" },
    { id: "3", value: "الاسبوع الثالث" },
  ];

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="تعديل المحاضره"
        size="lg"
        animation="fade"
      >
        <Form>
          <Form.Label
            label="عنوان الفيديو"
            style={styleLabel}
            htmlFor="videoTitle"
          />

          <Form.Input
            type="text"
            name="videoTitle"
            defaultValue={"الباب الاول"}
            style="w-full"
          />

          <Form.Label
            label=" المحاضره المرتبطة بالفيديو"
            style={styleLabel}
            htmlFor="linkedLecture"
          />

          <Form.Select
            name="linkedLecture"
            style="w-full"
            data={lectures}
            defaultValue="2" // id for select option that will be default
          />

          <Form.Label
            label=" الفيديو"
            style={styleLabel}
            htmlFor="videoSource"
          />

          <video controls className="w-full rounded-lg my-5">
            <source src="/videos/1.mp4" type="video/mp4" />
          </video>

          <Form.Label
            label=" تغيير الفيديو"
            style={styleLabel}
            htmlFor="video"
          />
          <Form.Input type="file" name="video" style="w-full" />

          <div className="flex items-center gap-3 mt-5">
            <Button style="solid" size="medium" width="fit">
              حفظ التعديلات
            </Button>
            <Button style="outline" size="medium" width="fit">
              اغلاق
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default EditVideo;
