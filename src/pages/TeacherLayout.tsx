import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/compontents/common/Sidebar";
const TeacherLayout = () => {
  const items = [
    {
      title: "الرئيسيه",
      url: "/teacherDashboard",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الدورات",
      url: "courses",
      icon: () => <span>🏠</span>,
    },
    {
      title: "المحاضرات",
      url: "lectures",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الامتحانات",
      url: "exams",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الواجبات",
      url: "homeworks",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الملفات",
      url: "files",
      icon: () => <span>🏠</span>,
    },
    {
      title: "السكرتيره",
      url: "assistants",
      icon: () => <span>🏠</span>,
    },
    {
      title: "اسئله الطلاب",
      url: "questions",
      icon: () => <span>🏠</span>,
    },
  ];
  return (
    <SidebarProvider>
      <AppSidebar items={items} />
    </SidebarProvider>
  );
};

export default TeacherLayout;
