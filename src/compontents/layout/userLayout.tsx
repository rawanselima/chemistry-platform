import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/compontents/common/Sidebar";
import { Outlet } from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { PiGraduationCapLight } from "react-icons/pi";
import HeaderDashboard from "@/compontents/common/HeaderDashboard";

export default function UserLayout() {
  const items = [
    {
      title: "الرئيسيه",
      url: "/userProfile",
      icon: FaRegChartBar,
    },
    {
      title: "كورساتي",
      url: "userCourses",
      icon: MdOutlineOndemandVideo,
    },
    {
      title: "المجتمع",
      url: "community",
      icon: RiUserCommunityLine,
    },
    {
      title: "الفواتير",
      url: "receipt",
      icon: IoReceiptOutline,
    },
    {
      title: "نتائج الامتحانات",
      url: "examResults",
      icon: PiGraduationCapLight,
    },
    {
      title: "نتائج الواجب",
      url: "homeworkResults",
      icon: PiGraduationCapLight,
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
}
