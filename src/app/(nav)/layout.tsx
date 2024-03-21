import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "@/app/providers";
import Header from "@/components/header";

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
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="container mx-auto p-4 max-w-6xl bg-white">
          <Providers>
            <Header />
            <div className="bg-white">{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
