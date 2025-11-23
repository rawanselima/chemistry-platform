import Ask from "@/compontents/community/Ask";
import Questions from "@/compontents/community/Questions";

const Community = () => {
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
      <Ask />
      <Questions />
    </main>
  );
};

export default Community;
