import "./globals.css";

import Sidebar
from "@/components/Sidebar";

import Navbar
from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="fr">

      <body
        className="
        bg-[#f6f4ef]
        "
      >

        {/* SIDEBAR */}
        <Sidebar />

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main
          className="
          ml-[220px]
          min-h-screen
          pt-24
          "
        >

          {children}

        </main>

      </body>

    </html>

  );
}