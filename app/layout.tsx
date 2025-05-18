import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";


export const metadata: Metadata = {
  title: "Dany Binu Luke | Developer",
  description: "A Portfolio for client purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition> {children} </PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
