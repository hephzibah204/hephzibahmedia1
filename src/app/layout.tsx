import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Hephzibah Media | Digital Marketing, SEO & Tech Agency Nigeria",
  description: "Hephzibah Media is a premium tech-driven agency in Nigeria specializing in Digital Marketing, SEO, Software Development, and Branding.",
  icons: {
    icon: '/icon.png',
  },
};

import { UniverseProvider } from "@/lib/UniverseContext";
import ClientGlobalUniverse from "@/components/immersive/ClientGlobalUniverse";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen bg-transparent text-foreground font-sans selection:bg-electric-blue selection:text-white relative">
        <Preloader />
        <UniverseProvider>
          <CustomCursor />
          <ClientGlobalUniverse />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </UniverseProvider>
      </body>
    </html>
  );
}
