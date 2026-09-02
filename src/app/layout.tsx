import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const pageTitle = `${site.name} — Narok to Maasai Mara Delivery`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageTitle,
    template: `%s — ${site.shortName} ${site.descriptor}`,
  },
  description: site.description,
  keywords: [
    "Narok to Maasai Mara delivery",
    "Mara logistics",
    "Maasai Mara supply delivery",
    "Narok logistics company",
    "safari camp supplies delivery Kenya",
    "Mara hospitality logistics",
    "Narok to Mara transport",
  ],
  openGraph: {
    type: "website",
    title: pageTitle,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-fg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
