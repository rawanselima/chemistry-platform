import { SidebarProvider } from "@/components/ui/sidebar";
import HeaderDashboard from "@/compontents/common/HeaderDashboard";
import AppSidebar from "@/compontents/common/Sidebar";
import { Outlet } from "react-router-dom";
import { IoPeopleSharp } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
const TeacherLayout = () => {
  const items = [
    {
      title: "الرئيسيه",
      url: "/teacherDashboard",
      icon: FaRegChartBar,
    },
    {
      title: "المستويات الدراسيه",
      url: "levels",
      icon: FaGraduationCap,
    },
    {
      title: "الدورات",
      url: "courses",
      icon: MdOutlineOndemandVideo,
    },
    {
      title: "الطلاب",
      url: "students",
      icon: IoPeopleSharp,
    },
    {
      title: "الفواتير",
      url: "receipts",
      icon: IoReceiptOutline,
    },
    {
      title: "مجتمع الطلاب",
      url: "community",
      icon: RiUserCommunityLine,
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
