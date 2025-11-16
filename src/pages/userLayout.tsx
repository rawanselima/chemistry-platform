import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/compontents/profile/app-Sidebar";
import HeaderProfile from "@/compontents/profile/HeaderProfile";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="font-tajawal font-medium bg-light-purple/25 w-full">
        <HeaderProfile />
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
