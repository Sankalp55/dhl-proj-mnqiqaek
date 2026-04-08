'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const logoText = "DHL";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#FFCC00]">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-[#D40511] font-['Arial_Black','Arial',sans-serif]">
          {logoText}
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[#333] font-bold font-['Arial',sans-serif] px-2 py-1 rounded hover:bg-[#FFCC00]/40 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-[#D40511] hover:bg-[#B5000D] text-white font-bold px-6 py-2 rounded-full shadow transition ml-4 font-['Arial_Black','Arial',sans-serif]"
        >
          Get a Quote
        </Link>
        {/* Mobile nav trigger */}
        <button
          className="md:hidden px-2 py-1 rounded text-[#D40511] hover:bg-[#FFCC00]/30 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>
      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#FFCC00] shadow">
          <ul className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-[#333] font-bold px-3 py-2 rounded hover:bg-[#FFCC00]/40 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="block bg-[#D40511] hover:bg-[#B5000D] text-white font-bold px-6 py-3 rounded-full shadow transition m-4 text-center"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
