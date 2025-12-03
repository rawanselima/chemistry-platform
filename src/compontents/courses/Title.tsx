import Form from "../../pattern/form/Form";
import TitleSection from "../common/TitleSection";

interface data {
  id: string;
  value: string;
}
const Title = () => {
  const data: Array<data> = [
    {
      id: "1",
      value: "الصف الاول الثانوي",
    },
    {
      id: "2",
      value: "الصف الثاني الثانوي",
    },
    {
      id: "3",
      value: "الصف الثالت الثانوي",
    },
  ];
  return (
    <section>
      <TitleSection> الكورسات المتاحه </TitleSection>
      <div className="xl:max-w-[90%] max-w-[95%] mx-auto">
        <Form>
          <Form.Input
            name="name"
            type="search"
            style="w-96"
            placeholder="ابحث عن اسم الكورس"
          />
          <Form.Select name="name" data={data} style="w-96" />
        </Form>
      </div>
    </section>
  );
};

export default Title;
