import type { videos } from "@/typs";

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
    label: "الصف الدراسي",
    style: "text-purple",
  },
  {
    key: "videoName",
    label: "اسم الفيديو",
  },
  {
    key: "time",
    label: "مده الفيديو ",
    style: "text-gray",
  },
  {
    key: "createdAt",
    label: "وقت النشر ",
  },
] satisfies { key: keyof videos; label: string; style?: string }[];
