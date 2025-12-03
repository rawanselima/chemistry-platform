import Modal from "@/components/ui/modal";
import GeneralTable from "../common/Table";
import { useNavigate } from "react-router-dom";
import Form from "@/pattern/form/Form";
import PaginationDiv from "../common/Pagination";

interface studentsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

type dataType = {
  id: string;
  examName: string;
  level: string;
  studentName: string;
  grade: string;
};
const Students = ({ isOpen, setIsOpen }: studentsProps) => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "examName",
      label: "اسم الامتحان",
    },
    {
      key: "studentName",
      label: "اسم الطالب",
      style: "font-bold",
    },
    {
      key: "level",
      label: "الصف الدراسي ",
    },
    {
      key: "grade",
      label: "درجه الاختبار",
      style: "font-bold text-purple text-lg",
    },
  ] satisfies { key: keyof dataType; label: string; style?: string }[];

  const data: dataType[] = [
    {
      id: "1",
      examName: "المناعه الجزء الاول",
      studentName: "احمد سليمان محمد",
      level: "الصف الاول الثانوي",
      grade: "20",
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
      value: "الدرجات النهائيه",
    },
    {
      id: "1",
      value: "لم يدخل الامتحان",
    },
    {
      id: "1",
      value: "فلتر من الاعلي للاقل",
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="كشف امتحانات الطلبه "
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
          defaultValue="فلتر نسبه درجات الطلاب"
        />
      </Form>

      <GeneralTable<dataType> columns={columns} data={data} actions={actions} />

      <section className="mt-5">
        <PaginationDiv />
      </section>
    </Modal>
  );
};

export default Students;
