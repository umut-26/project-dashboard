import {
  Calendar,
  LayoutDashboard,
  List,
  Plus,
  Settings,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { colors } from "@/theme/colors"; // colors.ts'dan renk paletini import ediyoruz

// Menu items.
const items = [
  {
    title: "Yeni Proje",
    url: "#",
    icon: Plus,
  },
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Task",
    url: "#",
    icon: List,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent
        className="flex flex-col items-center"
        style={{ backgroundColor: colors.blue }}
      >
        {" "}
        {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-2xl font-bold mb-8 flex items-center">
            <div>
              <Settings
                className="inline-block mr-2 w-8 h-8"
                style={{ color: colors.darkBlue }}
              />{" "}
              {/* Sabit hex kodu yerine tema değişkeni kullanıldı */}
              WINX
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-4">
                  <SidebarMenuButton asChild>
                    <div>
                      <a
                        href={item.url}
                        className="flex items-center gap-4 justify-center rounded-lg p-2 transition-colors duration-300 hover:bg-white/10"
                      >
                        <item.icon className="text-white w-6 h-6" />
                        <span className="text-white text-lg">{item.title}</span>
                      </a>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Footer - Turuncu buton */}
        <div className="mt-auto mb-6 w-full px-4">
          <button className="text-white w-full py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-300 hover:bg-orange-500/80">
            <Settings className="mr-2 w-5 h-5" />
            Ayarlar
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
