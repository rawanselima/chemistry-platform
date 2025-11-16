import PaginationDiv from "@/compontents/common/Pagination";
import Title from "../compontents/courses/Title";
import CoursesBox from "../compontents/courses/CoursesBox";

const Courses = () => {
  return (
    <main className="bg-[url(/assets/background.webp)] bg-cover bg-no-repeat ">
      <Title />

      <section className="py-10 xl:max-w-[90%] max-w-[95%] mx-auto gap-2 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
      </section>

      <section>
        <PaginationDiv />
      </section>
      
    </main>
  );
};

export default Courses;
