import Button from "@/compontents/common/Button";
import PaginationDiv from "@/compontents/common/Pagination";
import TitleDashboard from "@/compontents/common/TitleDashboard";
import AddCourse from "@/compontents/teacherCourses/AddCourse";
import TableCourses from "@/compontents/teacherCourses/TableCourse";
import Form from "@/pattern/form/Form";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface LevelsProps {
  id: string;
  value: string;
}

const TeacherCourses = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);

  const levels: LevelsProps[] = [
    { value: "الصف الاول الثانوي", id: "1" },
    { value: "الصف الاول الثانوي", id: "2" },
    { value: "الصف الاول الثانوي", id: "3" },
  ];

  return (
    <main>
      <section className="mt-10 flex items-center justify-between flex-wrap">
        <TitleDashboard> جميع الكورسات المتاحه </TitleDashboard>
        <div className="flex flex-wrap gap-2">
          <Form>
            <Form.Select
              data={levels}
              name="levels"
              defaultValue="اختر الصف الدراسي"
              style=" w-65 mt-0"
            />
          </Form>
          <Button
            style="solid"
            size="medium"
            width="fit"
            onClick={() => setIsAddOpen(true)}
          >
            <FiPlus /> اضافه كورس جديد
          </Button>
        </div>
      </section>

      {isAddOpen && <AddCourse isOpen={isAddOpen} setIsOpen={setIsAddOpen} />}

      <section className="bg-white" >
        <TableCourses />
      </section>

      <PaginationDiv />
    </main>
  );
};

export default TeacherCourses;
