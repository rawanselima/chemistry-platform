import Modal from "@/components/ui/modal";
import GeneralTable from "../common/Table";
import { useNavigate } from "react-router-dom";
import Form from "@/pattern/form/Form";
import PaginationDiv from "../common/Pagination";

interface studentsWatchingProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type dataType = {
  id: string;
  videoName: string;
  level: string;
  studentName: string;
  percentage: string;
};
const StudentsWatching = ({ isOpen, setIsOpen }: studentsWatchingProps) => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "videoName",
      label: "اسم الفيديو",
    },
    {
      key: "studentName",
      label: "اسم الطالب",
      style: "font-bold",
    },
    {
      key: "level",
      label: "الصف ",
    },
    {
      key: "percentage",
      label: "نسبه المشاهده",
      style: "font-bold text-purple text-lg",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      videoName: "المناعه الجزء الاول",
      studentName: "احمد سليمان محمد",
      level: "الصف الاول الثانوي",
      percentage: "25%",
    },
  ];

  const actions = [
    {
      label: "صفحه الطالب",
      function: () => navigate("/teacherDashboard/students/1"),
    },
  ];

  const dataFilter = [
    {
      id: "1",
      value: "شاهد 100% من الفيديو",
    },
    {
      id: "1",
      value: "شاهد اكثر من 70% من الفيديو",
    },
    {
      id: "1",
      value: "شاهد اكثر من 30% من الفيديو",
    },
    {
      id: "1",
      value: "لم يشاهد الفيديو",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="كشف مشاهده الطلبه للفيديو"
      size="xl"
      animation="fade"
    >
      <Form style="mb-5">
        <Form.Input
          type="search"
          placeholder="ابحث عن اسم طالب"
          name="StudentName"
        />

        <Form.Select
          data={dataFilter}
          name="filterStudents"
          defaultValue="فلتر نسبه مشاهده الطلاب"
        />
      </Form>

      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <PaginationDiv />
      </section>
    </Modal>
  );
};

export default StudentsWatching;
