import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  //   SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { SlChemistry } from "react-icons/sl";

// Menu items.
const items = [
  {
    title: "الرئيسيه",
    url: "/userProfile",
    icon: Home,
  },
  {
    title: "كورساتي",
    url: "/userCourses",
    icon: Inbox,
  },
  {
    title: "المجتمع",
    url: "/community",
    icon: Calendar,
  },
  {
    title: "الفواتير",
    url: "/recips",
    icon: Search,
  },
  {
    title: "نتائج الامتحانات",
    url: "/examResults",
    icon: Settings,
  },
  {
    title: "نتائج الواجب",
    url: "/homeworkResults",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right">
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
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* <SidebarMenuButton className="rounded-xl text-lg my-2 font-bold hover:bg-transparent  "> */}
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => {
                      return `px-5 py-2 rounded-sm text-lg my-2 font-bold  flex items-center  gap-2 w-full transition-all duration-300 ${
                        isActive
                          ? "bg-light-purple text-dark-purple"
                          : "bg-transparent hover:bg-light-purple hover:text-dark-purple text-light-purple"
                      }`;
                    }}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </NavLink>
                  {/* </SidebarMenuButton> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
