import Button from "../common/Button";
import { GrDocumentDownload } from "react-icons/gr";
const FilesBox = () => {
  return (
    <div className="flex items-center flex-wrap justify-between p-5 my-3 rounded-lg border-1 border-light-purple bg-white">
      <div className="flex items-center gap-3">
        <div className="bg-light-purple p-3 text-purple text-2xl rounded-lg ">
          <GrDocumentDownload />
        </div>
        <div>
          <h2 className="md:text-xl text-lg font-bold text-dark-purple">
            ملف - المتتابعات والمتسلسلات
          </h2>
          <div className="flex items-center justify-between text-lg">
            <p className="text-gray flex items-center gap-1">Pdf</p>
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-5 flex items-center gap-2">
        <Button style="outline" width="fit" size="medium">
          <GrDocumentDownload />
          تحميل
        </Button>
      </div>
    </div>
  );
};

export default FilesBox;
