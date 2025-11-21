import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { SlChemistry } from "react-icons/sl";
import { FaRegChartBar } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { RiUserCommunityLine } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { PiGraduationCapLight } from "react-icons/pi";
// Menu items.
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
    url: "recips",
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

export function AppSidebar() {
  return (
    <Sidebar side="right" collapsible="icon">
      <SidebarContent className="footer-gradient text-light-purple">
        <SidebarGroup>
          <SidebarGroupLabel className="text-center font-bold w-fit mx-auto text-light-purple my-5">
            <span className="text-4xl text-light-purple">
              <SlChemistry />
            </span>
            <h3 className="text-4xl font-extrabold text-light-purple mt-1">
              المعادله
            </h3>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarTrigger className="sidebar-trigger px-7 cursor-pointer text-right  hover:bg-light-purple hover:text-dark-purple" />

              {items.map((item) => (
                <NavLink to={item.url} key={item.title} end>
                  {({ isActive }) => {
                    return (
                      <SidebarMenuItem
                        className={`text-center p-2 w-full  cursor-pointer rounded-sm text-lg my-2 font-bold  flex items-center  gap-2 transition-all duration-300 ${
                          isActive
                            ? "bg-light-purple text-dark-purple hover:bg-light-purple"
                            : "bg-transparent hover:bg-light-purple hover:text-dark-purple text-light-purple"
                        }`}
                      >
                        <SidebarMenuButton className="cursor-pointer hover:bg-light-purple hover:text-dark-purple font-bold text-lg">
                          <span>
                            <item.icon />
                          </span>
                          <span> {item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  }}
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
