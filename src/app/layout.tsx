import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";

const inter = Afacad({ subsets: ["cyrillic-ext"], display: "swap" });

export const metadata: Metadata = {
  title: "Gwakenem: Your AI Therapist",
  description: "Your AI therapist that can listen to you and help you with your problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main className="min-h-screen">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
