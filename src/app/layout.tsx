import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { colors } from "@/theme/colors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WINX Dashboard",
  description: "WINX Dashboard Application",
};

// Column-based layout with 2 columns for sidebar and 10 for content
function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      {/* Grid container for the entire layout */}
      <div className="grid grid-cols-12 w-full">
        {/* Sidebar: 2 columns wide */}
        <div className="col-span-2 h-screen">
          <AppSidebar />
        </div>
        
        {/* Main content: 10 columns wide */}
        <div className="col-span-10 pt-4">
          <div className="max-w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
        style={{ backgroundColor: colors.lightBlue }}
      >
        <SidebarProvider defaultOpen={true}>
          <ResponsiveLayout>
            {children}
          </ResponsiveLayout>
        </SidebarProvider>
      </body>
    </html>
  );
}
