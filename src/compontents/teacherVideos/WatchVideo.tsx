import Modal from "@/components/ui/modal";
import useGetDetailsVideo from "./useGetDetailsVideo";
import Loader from "../common/Loader";
import Error from "../common/Error";

const WatchVideo = ({
  isOpen,
  setIsOpen,
  videoId,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  videoId: string | number | undefined;
}) => {
  const { data, isLoading, isError } = useGetDetailsVideo(videoId);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      title="مشاهده الفيديو"
      size="lg"
      animation="fade"
    >
      <video controls className="w-full rounded-lg my-5">
        <source src={data.videoLink} type="video/mp4" />
      </video>
    </Modal>
  );
};

export default WatchVideo;
