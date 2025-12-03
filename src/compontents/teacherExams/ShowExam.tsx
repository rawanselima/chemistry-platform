import Modal from "@/components/ui/modal";
import QuestionBox from "./QuestionBox";
import Button from "../common/Button";

const ShowExam = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="عرض الامتحان"
      size="lg"
      animation="fade"
    >
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />
      <QuestionBox />

      <Button style="solid" width="fit" size="medium">
        اغلاق
      </Button>
    </Modal>
  );
};

export default ShowExam;
