import { FaCircleCheck } from "react-icons/fa6";
import { GiChemicalDrop } from "react-icons/gi";
import SubTitle from "../common/SubTitle";

interface serviceType {
  title: string;
  description: string;
}
const About = () => {
  const service: serviceType[] = [
    {
      title: "الخبرة والاحترافية في تعليم الكيمياء",
      description:
        "أسس علمية متينة ومنهجية متكاملة لتعزيز مهارات الطلاب، مع خطة دراسية منظمة تركز على الفهم العميق والتدريب المتدرج للوصول إلى التفوق في الكيمياء.",
    },
    {
      title: "تعلم بسهولة ويسر",
      description:
        "تعلم بسهولة ويسر من خلال شروحات مبسطة وأمثلة واضحة تساعدك على فهم الكيمياء خطوة بخطوة دون تعقيد.",
    },
    {
      title: "نظام تعليمي مرن",
      description:
        "نظام تعليمي مرن يتيح لك التعلم في أي وقت ومن أي مكان، بما يتناسب مع جدولك الدراسي ومستواك في مادة الكيمياء.",
    },
    {
      title: "أسعار مناسبة للجميع",
      description:
        "أسعار مناسبة للجميع تتيح لكل طالب فرصة التعلم من أفضل الأساتذة دون أي عبء مادي.",
    },
  ];
  return (
    <section className="p-20 py-20 px-5 md:px-20 flex flex-wrap justify-between">
      <div className="xl:w-[45%] w-[95%] mx-auto  xl:mx-0">
        <div>
          <div className="flex items-center justify-between">
            <SubTitle>
              <GiChemicalDrop /> لماذا نحن ؟
            </SubTitle>
            <img src="/assets/waves.png" alt="wavesImg" />
          </div>
          <p className="font-bold text-xl text-dark-purple py-4 relative">
            نهدف إلى بناء مجتمع من المتعلمين مدى الحياة، يسعون دائمًا لاكتساب
            المعرفة وتطوير مهاراتهم في مجال الكيمياء.
            <img
              src="/assets/circle.png"
              alt="circleImg"
              className="absolute xl:right-75 md:right-100 right-0 bottom-3 w-20"
            />
          </p>
          <p className="text-sm text-gray">
            يتميز هذا المعلم أيضًا بـ خبرة طويلة في تدريس مادة الكيمياء للمرحلة
            الثانوية، مما يمكّنه من فهم احتياجات الطلاب المختلفة والتعامل معها
            بمرونة. يستخدم طرقًا تفاعلية وأدوات حديثة لجعل الدروس أكثر تشويقًا
            وتحفيزًا، ويهتم بتأسيس الطالب علميًا خطوة بخطوة حتى يتمكن من التفوق
            في الامتحانات وتحقيق أعلى الدرجات.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-5">
          {service.map((ele) => {
            return (
              <div className="p-3 rounded-lg bg-light-purple/50">
                <h3 className=" flex items-center  gap-2 font-bold text-dark-purple text-lg py-2 ">
                  <FaCircleCheck /> {ele.title}
                </h3>
                <p className="text-sm text-gray"> {ele.description} </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="xl:w-[35%] w-[95%] mx-auto relative mt-20 xl:mt-0">
        <img
          src="/assets/traingle-1.png"
          alt="triangleImg"
          className="absolute -left-5 -top-5 w-64"
        />
        <img
          src="/assets/dots.webp"
          alt="dotsImg"
          className="w-62 absolute -top-20 -right-20"
        />
        <img
          src="/assets/students-2.png"
          alt="studentsImg"
          className="w-full md:h-[550px] h-[400px] object-fit relative border-10 border-white z-10"
        />
        <img
          src="/assets/traingle-2.png"
          alt="triangleImg"
          className="absolute -right-5 -bottom-5 z-0 w-64"
        />
      </div>
    </section>
  );
};

export default About;
