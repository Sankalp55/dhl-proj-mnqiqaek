import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { NavbarSticky } from "@/components/blocks/NavbarSticky";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "DHL Logistics — Modern Shipping & Logistics",
  description:
    "A modern corporate logistics website blueprint for DHL featuring an animated hero, services, integrations, pricing plans, testimonials, FAQ, team section, and a client-side contact form.",
  themeColor: "#FFCC00",
  openGraph: {
    title: "DHL Logistics — Modern Shipping & Logistics",
    description:
      "A modern corporate logistics website blueprint for DHL featuring an animated hero, services, integrations, pricing plans, testimonials, FAQ, team section, and a client-side contact form.",
    images: [],
    siteName: "DHL Logistics",
    type: "website",
  },
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Overview", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/services#integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQs", href: "/pricing#faq" },
      { label: "Tracking visibility", href: "/services#features" },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} bg-background text-foreground antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary selection:text-primaryForeground">
        <NavbarSticky
          logo="DHL"
          navItems={NAV_ITEMS}
          ctaLabel="Get a quote"
          ctaHref="/contact"
        />
        <main className="flex-1">{children}</main>
        <FooterMultiColumn
          brand="DHL"
          description="Fast, reliable shipping—built for modern supply chains."
          columns={FOOTER_COLUMNS}
          copyright="© DHL. Text-only demo site blueprint."
        />
      </body>
    </html>
  );
}
