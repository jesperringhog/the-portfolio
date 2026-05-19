import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Jesper Ringhög Portfolio",
  description: "Created by Jesper Ringhög",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="h-full flex flex-col bg-background font-mono">
        <Header />
        <div className="flex flex-col flex-1 mt-20">
          <main className="flex-1 xl:mx-[5%] bg-secondary sm:items-start">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
