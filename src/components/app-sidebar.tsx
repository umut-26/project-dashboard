'use client';

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

import { colors } from "@/theme/colors";
import { cn } from "@/lib/utils";

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
    isActive: true,
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
    <div className="h-full w-full">
      <Sidebar collapsible="none" className="w-full h-full">
        <SidebarContent
          className="flex flex-col items-stretch p-4 relative overflow-visible h-full w-full"
          style={{ backgroundColor: colors.blue }}
        >
          <SidebarGroup>
            <div className="relative flex justify-between items-center mb-15">
              <SidebarGroupLabel 
                className="text-white text-2xl font-bold flex items-center justify-start"
              >
                <div className="flex items-center">
                  <Settings
                    className="w-8 h-8 mr-3"
                    style={{ color: colors.darkBlue }}
                  />
                  <span>WINX</span>
                </div>
              </SidebarGroupLabel>
            </div>
            
            <SidebarGroupContent className="overflow-visible">
              <SidebarMenu className="space-y-4 w-full overflow-visible">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                    >
                      <a
                        href={item.url}
                        className={cn(
                          "flex items-center rounded-lg transition-all duration-200 px-6 py-5 w-full",
                          item.isActive
                            ? "bg-white/20 text-white font-medium shadow-sm" 
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        <item.icon 
                          className={cn(
                            "w-7 h-7 mr-4",
                            item.isActive 
                              ? "text-orange-400" 
                              : "text-white/75 group-hover:text-white"
                          )}
                        />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Footer - Ayarlar butonu */}
          <div className="mt-auto mb-3 w-full px-2">
            <button 
              className="text-white w-full py-5 px-6 rounded-lg font-medium flex items-center 
                     bg-blue-700 hover:bg-blue-800 transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: colors.darkBlue }}
            >
              <Settings className="mr-4 w-7 h-7 text-orange-400" />
              <span className="text-base">Ayarlar</span>
            </button>
          </div>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
