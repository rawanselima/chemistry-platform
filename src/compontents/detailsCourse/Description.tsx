import Button from "../common/Button";

const Description = () => {
  return (
    <section className="z-10 relative flex items-center bg-[url(/assets/details-2.jpg)] bg-no-repeat bg-cover bg-center w-full  min-h-[700px]">
      {/* <div className="bg-black/20 inset-0  backdrop-blur-xs w-full h-full absolute top-0 left-0 z-0 "></div> */}

      <div className="p-10 relative z-10 xl:w-[50%] md:w-[80%] w-[95%] mx-auto text-center">
        <h1 className="md:text-6xl text-4xl text-dark-purple font-bold">
          كورس الباب الاول
        </h1>

        <h3 className="md:text-3xl text-2xl py-3 text-purple">
          الصف الثاني الثانوي
        </h3>

        <p className="md:text-xl text-lg">
          دي المراجعة الشهرية الثانية اللي بتأهلك للامتحان وتراجع كل اللي فات
          وتلم المتراكم عليك، وهي شاملة آخر 5 محاضرات (من المحاضرة السادسة لحد
          العاشرة)، وبعدها أنت مفروض تكون مستعد للامتحان الشامل الثاني
        </p>
        <div className="mx-auto mt-5 w-1/2">
          <Button style="solid" size="large" width="full">
            اشترك معانا دلوقتي
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Description;
