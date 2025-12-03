import Modal from "@/components/ui/modal";

const WatchVideo = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
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
        <source src="/videos/1.mp4" type="video/mp4" />
      </video>
    </Modal>
  );
};

export default WatchVideo;
