import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Jesper Ringhög Portfolio",
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
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tcq6ukd.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-mono">
        <Header />
          <main className="mt-20 mb-[1] xl:mx-[5%] lg:pb-10 flex flex-1 justify-center bg-secondary">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
