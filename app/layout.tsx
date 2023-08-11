import { Navbar } from "@/components/Navbar";
import "./global.css";
import { Footer } from "@/components/Footer";
import { SidebarWithSearch } from "@/components/Sidebar";

export const metadata = {
  title: "Flexible",
  description: "Try this at home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SidebarWithSearch />
        <div className="w-4/5 min-h-screen p-4 shadow-xl shadow-blue-gray-900/5 block float-left h-screen sidebar transition-transform duration-300 ease-in-out">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
