import RelatedVideoBox from "./RelatedVideoBox";

const RelatedVideos = () => {
  return (
    <section className="my-10 border-2 border-light-purple rounded-lg px-5 h-full xl:overflow-y-scroll custom-scrollbar">
      <div>
        <h2 className="font-bold text-2xl text-dark-purple py-3">
          فيديوهات ذات صلة
        </h2>
      </div>
      <div>
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
        <RelatedVideoBox />
      </div>
    </section>
  );
};

export default RelatedVideos;
