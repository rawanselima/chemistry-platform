import Form from "@/pattern/form/Form";
import type { ReactNode } from "react";

interface dataType {
  id: string;
  value: string;
}
const SearchFilter = ({
  data,
  placeholder,
  children,
  defaultValue,
}: {
  data: dataType[];
  placeholder: string;
  children?: ReactNode;
  defaultValue?: string;
}) => {
  return (
    <section className="flex w-full justify-between items-center flex-wrap mb-5 bg-white p-5 rounded-lg border-1 border-light-purple">
      {children}
      <Form>
        <Form.Select
          data={data}
          name="filterLecture"
          style="w-60"
          defaultValue={defaultValue || "اختر المحاضره"}
        />
        <Form.Input
          name="videoName"
          type="search"
          placeholder={placeholder}
          style="w-60"
        />
      </Form>
    </section>
  );
};

export default SearchFilter;
