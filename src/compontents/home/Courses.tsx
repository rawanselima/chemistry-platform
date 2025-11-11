import Button from "../common/Button";
import { TiArrowLeft } from "react-icons/ti";
import { GiChemicalDrop } from "react-icons/gi";
import { Link } from "react-router-dom";
import CoursesBox from "./CoursesBox";
import SubTitle from "../common/subTitle";
const Courses = () => {
  return (
    <section className="bg-[url(/assets/background.webp)] bg-no-repeat bg-cover py-20 px-5 md:px-20">
      <div className="flex justify-between flex-wrap items-start ">
        <div>
          <SubTitle>
            <span className="text-lg">
              <GiChemicalDrop />
            </span>
            الكورسات المُقترحة
          </SubTitle>
          <h1 className="font-bold md:text-2xl text-lg text-dark-purple mt-3 relative ">
            يمكن لطلاب منصة <span>المعادله</span> الانضمام إلينا <br />
            والاستفادة من الكورسات التعليمية المتخصصة في مادة الكيمياء.
            <img
              src="/assets/circle.png"
              alt="circleImg"
              className="absolute top-0 md:w-24 w-18 md:right-50 right-36 "
            />
          </h1>
        </div>
        <Link to="#" className="md:my-0 my-3">
          <Button style="solid" size="large">
            استكشف المزيد من الكورسات <TiArrowLeft />
          </Button>
        </Link>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 my-10">
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
        <CoursesBox />
      </div>
    </section>
  );
};

export default Courses;
