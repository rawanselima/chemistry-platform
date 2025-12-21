import type { lectures } from "@/typs";

export const columns = [
  {
    key: "courseName",
    label: "اسم الكورس",
  },
  {
    key: "lectureName",
    label: "اسم المحاضره",
    style: "text-purple",
  },
  {
    key: "levelName",
    label: "  الصف الدراسي",
  },
  {
    key: "videosNumber",
    label: "عدد الفيديوهات",
  },
  {
    key: "examsNumber",
    label: " عدد الامتحانات",
  },
  {
    key: "homeworksNumber",
    label: "عدد الواجبات ",
  },
] satisfies { key: keyof lectures; label: string; style?: string }[];
