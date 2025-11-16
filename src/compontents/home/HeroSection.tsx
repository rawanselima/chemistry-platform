import Button from "../common/Button";
import { TiArrowLeft } from "react-icons/ti";

const HeroSection = () => {
  return (
    <section className="md:h-[90vh] md:overflow-y-hidden  bg-[url(/assets/heroSectionBackground.webp)] bg-no-repeat bg-cover grid md:grid-cols-2 justify-between">
      <div className="relative text-sm p-8 md:p-16 lg:p-32">
        <div>
          <h6 className="text-purple">
            مرحبًا بكم في منصة المعادله للتعلم عبر الإنترنت،
          </h6>
          <h1 className="md:text-6xl text-4xl text-dark-purple font-bold md:py-7 py-3">
            حقق أحلامك من خلال التعليم والمعرفة
          </h1>
          <h3>
            نحن نمتلك خبرة واسعة في إنشاء المنصات التعليمية، ونستخدم استراتيجيات
            فعّالة لضمان نجاح عملية التعلم الإلكتروني لطلابنا.
          </h3>
        </div>

        <div className="md:my-10 my-5">
          <Button style="solid" size="large" width="fit">
            اكتشف الكورسات <TiArrowLeft />
          </Button>
        </div>
        <div className="w-80 absolute xl:bottom-54 right-64 rotate-180 hidden xl:block">
          <img
            src="/assets/arrow.png"
            alt="arrowImg"
            className="w-full object-fit"
          />
        </div>
        <div className="absolute top-40 -left-50 w-80 hidden xl:block">
          <img src="/assets/dots.webp" alt="dotsImg" />
        </div>
        <div className="absolute left-0 bottom-15 ">
          <img src="/assets/book.png" alt="bookImg" />
        </div>
      </div>
      <div className="w-full h-full relative">
        <img
          src="/assets/students.webp"
          alt="studentsImg"
          className="w-full h-full object-fit"
        />
      </div>
    </section>
  );
};

export default HeroSection;

//  <section className="w-full min-h-[80vh] bg-[url(/assets/hero.jpg)] bg-no-repeat bg-cover">
//       <div>
//         <h6 className="text-white">
//           مرحبًا بكم في منصة المعادله للتعلم عبر الإنترنت،
//         </h6>

//         <h1 className="md:text-6xl text-4xl text-dark-purple font-bold md:py-7 py-3">
//           حقق أحلامك من خلال التعليم والمعرفة
//         </h1>

//         <h3>
//           نحن نمتلك خبرة واسعة في إنشاء المنصات التعليمية، ونستخدم استراتيجيات
//           فعّالة لضمان نجاح عملية التعلم الإلكتروني لطلابنا.
//         </h3>
//       </div>
//     </section>
