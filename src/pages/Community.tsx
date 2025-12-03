import Tabs from "@/compontents/common/Tabs";
import Ask from "@/compontents/community/Ask";
import Questions from "@/compontents/community/Questions";
import type { PagesProps } from "@/typs";

const Community = () => {
  const pages: PagesProps[] = [
    { title: "كل الاسئله", path: "", value: "allQuestions" },
    {
      title: "اسئلتي",
      path: "",
      value: "myQuestions",
    },
  ];

  return (
    <main className="xl:w-3/4 w-full mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-dark-purple mt-7 mb-2 ">
          مجتمع مستر احمد خالد
        </h1>
        <p className="text-center text-lg text-gray">
          طرح أسئلتك وشارك معرفتك مع زملائك
        </p>
      </section>
      <Ask placeholder="اكتب سؤالك هنا و شارك باستفسارك..." role="student" />
      <Tabs pages={pages} mode="filter" paramName="tab" />
      <Questions />
    </main>
  );
};

export default Community;
