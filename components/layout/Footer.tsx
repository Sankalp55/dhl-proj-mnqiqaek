import Link from 'next/link';

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/pricing#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

const logoText = "DHL Logistics";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-[#FFCC00] pt-16 pb-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 px-4">
        <div className="mb-6 md:mb-0">
          <div className="text-2xl font-black tracking-tighter text-[#D40511] font-['Arial_Black','Arial',sans-serif] mb-2">
            {logoText}
          </div>
          <div className="text-[#333] text-sm font-['Arial',sans-serif] opacity-70 max-w-xs">
            Bold, fast, and reliable logistics for modern businesses.
          </div>
        </div>
        <div className="flex flex-1 gap-10 justify-end">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-black font-['Arial_Black','Arial',sans-serif] text-[#333] mb-2">
                {col.title}
              </div>
              <ul className="space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[#333] font-['Arial',sans-serif] text-sm hover:text-[#D40511] transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center text-[#333] text-xs opacity-60 font-['Arial',sans-serif]">
        © {year} DHL Logistics. All rights reserved.
      </div>
    </footer>
  );
}
