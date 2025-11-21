import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/compontents/profile/Sidebar";
import HeaderProfile from "@/compontents/profile/HeaderProfile";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="font-tajawal font-medium bg-light-purple/25 w-full p-5">
        <HeaderProfile />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
