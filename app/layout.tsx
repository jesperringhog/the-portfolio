import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Jesper Ringhög",
  description: "Created by Jesper Ringhög",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="h-full flex flex-col bg-background text-foreground font-mono">
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
