'use client';

import {
  Calendar,
  LayoutDashboard,
  List,
  Plus,
  Settings,
  Users,
  ChevronLeft,
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
  useSidebar,
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
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent
        className="flex flex-col items-stretch p-4 relative overflow-visible"
        style={{ backgroundColor: colors.blue }}
      >
        <SidebarGroup>
          <div className="relative flex justify-between items-center mb-15">
            <SidebarGroupLabel 
              className={cn(
                "text-white text-2xl font-bold flex items-center",
                isCollapsed ? "justify-center flex-1" : "justify-start"
              )}
            >
              <div className={cn(
                "flex items-center",
                isCollapsed && "justify-center w-full"
              )}>
                <Settings
                  className={cn(
                    isCollapsed ? "w-8 h-8" : "w-8 h-8 mr-3"
                  )}
                  style={{ color: colors.darkBlue }}
                />
                {!isCollapsed && <span>WINX</span>}
              </div>
            </SidebarGroupLabel>
            
            {/* Toggle butonu sidebar içinde - sadece yatay hareket etsin */}
            <button 
              onClick={toggleSidebar}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-full absolute",
                "bg-blue-500/20 hover:bg-blue-500/30 transition-all border border-white/20",
                isCollapsed ? "right-[-5px]" : "right-0",
                "top-0" // Dikey konum sabit
              )}
            >
              <ChevronLeft 
                className={cn(
                  "w-6 h-6 text-white/80 transition-transform", 
                  isCollapsed ? "rotate-180" : ""
                )} 
              />
            </button>
          </div>
          
          <SidebarGroupContent className="overflow-visible">
            <SidebarMenu className={cn(
              "space-y-4 w-full overflow-visible",
              isCollapsed && "flex flex-col items-center"
            )}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className={cn(
                  isCollapsed && "flex justify-center w-full"
                )}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <a
                      href={item.url}
                      className={cn(
                        "flex items-center rounded-lg transition-all duration-200",
                        isCollapsed 
                          ? "justify-center w-14 h-14 mx-auto" 
                          : "px-6 py-5 w-full",
                        item.isActive
                          ? "bg-white/20 text-white font-medium shadow-sm" 
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      <item.icon 
                        className={cn(
                          isCollapsed ? "w-7 h-7" : "w-7 h-7 mr-4",
                          item.isActive 
                            ? "text-orange-400" 
                            : "text-white/75 group-hover:text-white"
                        )}
                      />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Footer - Ayarlar butonu */}
        {!isCollapsed ? (
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
        ) : (
          <div className="mt-auto mb-3 w-full flex justify-center">
            <button 
              className="text-white p-3 rounded-full font-medium flex items-center justify-center
                       hover:bg-blue-800 transition-colors duration-200 shadow-sm w-14 h-14"
              style={{ backgroundColor: colors.darkBlue }}
              title="Ayarlar"
            >
              <Settings className="w-7 h-7 text-orange-400" />
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
