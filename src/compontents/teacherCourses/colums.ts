import type { courses } from "@/typs";

  export const columns = [
    {
      key: "img",
      label: "الصوره",
    },
    {
      key: "courseName",
      label: "اسم الكورس",
    },
    {
      key: "level",
      label: "المرحله",
      style: "text-purple",
    },
    {
      key: "price",
      label: "السعر",
      style: "text-simon",
    },
    {
      key: "discount",
      label: "تخفيض ",
      style: "font-bold",
    },
    {
      key: "description",
      label: "وصف الكورس",
      style:
        "max-w-[200px] overflow-hidden text-sm text-ellipsis whitespace-nowrap",
    },
    {
      key: "lecturesNumber",
      label: "المحاضرات",
    },
    {
      key: "studentsNumber",
      label: "الطلاب",
    },
  ] satisfies { key: keyof courses; label: string; style?: string }[];