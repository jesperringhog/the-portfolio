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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tcq6ukd.css" />
      </head>
      <body className="min-h-screen flex flex-col text-foreground font-mono 
      bg-fixed bg-linear-to-b from-gradient-primary to-gradient-secondary">
        <Header />
        <div className="pt-20 pb-[1] xl:mx-[5%] lg:pb-10 xl:pb-0 2xl:pb-10 flex flex-col flex-1 items-center justify-center 
        bg-background">
          <main className="max-w-400 flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
