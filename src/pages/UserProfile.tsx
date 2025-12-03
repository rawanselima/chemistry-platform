import TitleDashboard from "@/compontents/common/TitleDashboard";
import ExamsToday from "@/compontents/userProfile/ExamsToday";
import VideosChart from "@/compontents/userProfile/VideosChart";
import ExamsChart from "@/compontents/userProfile/ExamsChart";
import Statics from "@/compontents/userProfile/statics";
import Form from "@/pattern/form/Form";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import ProgressCourse from "@/compontents/userProfile/ProgressCourse";
const UserProfile = () => {
  return (
    <main>
      <Statics />
      <section className="grid xl:grid-cols-3 grid-cols-1 gap-5 my-10 ">
        <ExamsToday />
        <div className="xl:col-span-2">
          <TitleDashboard>
            <MdOutlineOndemandVideo /> نشاطك التعليمي
          </TitleDashboard>
          <VideosChart />
        </div>
      </section>
      <section>
        <div className="flex justify-between flex-wrap">
          <TitleDashboard>
            <MdOutlineBookmarkAdded /> معدل التقدم الاختبارات خلال كورس العضويه
          </TitleDashboard>
          <Form>
            <Form.Select
              name="courses"
              style="md:w-96 w-full mb-10"
              defaultValue="اختر اسم الكورس"
              data={[
                { id: "1", value: "عضويه" },
                { id: "2", value: "معادلات الحديد" },
              ]}
            />
          </Form>
        </div>
        <ExamsChart />
      </section>

      <ProgressCourse />
    </main>
  );
};

export default UserProfile;
