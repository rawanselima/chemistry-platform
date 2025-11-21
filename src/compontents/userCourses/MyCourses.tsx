import CoursesBox from "@/compontents/courses/CoursesBox";

const MyCourses = () => {
  return (
    <main>
      <section className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
      </section>
    </main>
  );
};

export default MyCourses;
