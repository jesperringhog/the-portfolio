import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex flex-col bg-gray-700">{children}</body>
    </html>
  );
}

export default RootLayout;
