import { SidebarProvider } from "@/components/ui/sidebar";
import HeaderDashboard from "@/compontents/common/HeaderDashboard";
import AppSidebar from "@/compontents/common/Sidebar";
import { Outlet } from "react-router-dom";
const TeacherLayout = () => {
  const items = [
    {
      title: "الرئيسيه",
      url: "/teacherDashboard",
      icon: () => <span>🏠</span>,
    },
    {
      title: "المستويات الدراسيه",
      url: "levels",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الدورات",
      url: "courses",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الطلاب",
      url: "students",
      icon: () => <span>🏠</span>,
    },
    {
      title: "الفواتير",
      url: "receipts",
      icon: () => <span>🏠</span>,
    },
    {
      title: "مجتمع الطلاب",
      url: "community",
      icon: () => <span>🏠</span>,
    },
    {
      title: "السكرتيره",
      url: "assistants",
      icon: () => <span>🏠</span>,
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar items={items} />
      <main className="font-tajawal font-medium bg-light-purple/25 w-full p-5">
        <HeaderDashboard />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default TeacherLayout;
