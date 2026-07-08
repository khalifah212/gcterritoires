import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "GC Territoires | Conseil en développement territorial",
    template: "%s | GC Territoires",
  },

  description:
    "GC Territoires accompagne les opérateurs immobiliers, aménageurs, entreprises et collectivités dans leurs projets d'aménagement, de développement territorial, de relations institutionnelles et de stratégie foncière.",

  applicationName: "GC Territoires",

  keywords: [
    "GC Territoires",
    "développement territorial",
    "aménagement",
    "aménagement du territoire",
    "urbanisme",
    "foncier",
    "stratégie territoriale",
    "collectivités",
    "relations institutionnelles",
    "conseil",
    "cabinet de conseil",
    "développement économique",
    "projets immobiliers",
    "opérateurs immobiliers",
    "aménageurs",
    "France",
    "Occitanie",
  ],

  authors: [
    {
      name: "GC Territoires",
      url: "https://gcterritoires.fr",
    },
  ],

  creator: "GC Territoires",

  publisher: "GC Territoires",

  category: "Business",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "GC Territoires",
    description:
      "Cabinet de conseil spécialisé en développement territorial, aménagement, foncier et relations institutionnelles.",

    url: "https://gcterritoires.fr",

    siteName: "GC Territoires",

    locale: "fr_FR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GC Territoires",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "GC Territoires",

    description:
      "Conseil en développement territorial, aménagement et relations institutionnelles.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "TON_CODE_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col bg-white text-black antialiased">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}