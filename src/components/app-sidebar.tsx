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
      <SidebarContent className="flex flex-col items-center"> {/* Tüm içerikleri ortaladık */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-2xl font-bold mb-8 flex items-center">
            <div>
              <Settings className="inline-block mr-2 text-blue-900 w-8 h-8" /> {/* İkonu koyu lacivert yaptık ve büyüttük */}
              WINX
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-4"> {/* Menü öğelerini ayırdık */}
                  <SidebarMenuButton asChild>
                    <div>
                      <a href={item.url} className="flex items-center gap-4 justify-center"> {/* İkonları ve yazıları ortaladık */}
                        <item.icon className="text-white w-6 h-6" /> {/* İkonları büyüttük */}
                        <span className="text-white text-lg">{item.title}</span>
                      </a>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
