import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduSphere - Système de Gestion Scolaire",
  description: "Système de gestion scolaire moderne pour la Guinée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="h-screen flex">
          {/* LEFT */}
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-gray-800">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start gap-2"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="hidden lg:block font-bold text-xl text-blue-400">
                EduSphere
              </span>
            </Link>
            <Menu />
          </div>
          {/* RIGHT */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-900 overflow-scroll flex flex-col">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}