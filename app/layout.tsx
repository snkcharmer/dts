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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
