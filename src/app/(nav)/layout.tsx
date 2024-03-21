import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";
import { headers } from "next/headers";
import NavigationFooterButtons from "@/components/nav/navigation-footer-buttons";
import NavigationHeaderButtons from "@/components/nav/navigation-header-buttons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golf Checker",
  description: "Finding Tee Times in Your Area",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="container mx-auto p-4 max-w-6xl bg-white">
          <Providers>
            <Header />

            <div className="bg-white flex justify-center flex-col">
              <NavigationHeaderButtons />
              <div className="min-h-3/4 max-h-3/4 overflow-scroll">
                {children}
              </div>
              <NavigationFooterButtons />
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
