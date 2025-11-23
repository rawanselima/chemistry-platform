import MainVideo from "@/compontents/userVideos/MainVideo";
import RelatedVideos from "@/compontents/userVideos/RelatedVideos";

const UserVideos = () => {
  return (
    <main>
      <section className="grid xl:grid-cols-3 grid-cols-1 gap-5 xl:h-[600px]">
        <div className="col-span-2">
          <MainVideo />
        </div>
        <RelatedVideos />
      </section>
    </main>
  );
};

export default UserVideos;
