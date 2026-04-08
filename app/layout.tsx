import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: "DHL Logistics — Corporate Shipping & Logistics Services",
  description: "Corporate logistics website with services, pricing plans, integrations, testimonials, FAQs, and a client-side contact form for quotes and support.",
  themeColor: "#FFCC00",
  openGraph: {
    title: "DHL Logistics — Corporate Shipping & Logistics Services",
    description: "Corporate logistics website with services, pricing plans, integrations, testimonials, FAQs, and a client-side contact form for quotes and support.",
    type: "website"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background text-foreground scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground tracking-tight`}>
        <Navbar />
        <main className="flex flex-col min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
