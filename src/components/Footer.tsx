import Link from "next/link";
import { companyAddress, productDivisions } from "@/lib/site-data";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Media", href: "/media" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0B3C6D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.9fr_0.9fr] lg:px-10">
        {/* Brand */}
        <div>
          <p className="text-lg font-semibold">
            Aspen Pharmaceuticals Pvt. Ltd.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-50/78">
            An independent Indian pharmaceutical company established in 2010,
            serving healthcare needs through ethical practices and reliable
            manufacturing partnerships.
          </p>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="text-blue-50/62 transition-colors hover:text-white">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div>
          <p className="text-sm font-semibold">Company</p>
          <div className="mt-4 grid gap-3">
            {companyLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-blue-50/72 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Product Divisions */}
        <div>
          <p className="text-sm font-semibold">Product Divisions</p>
          <div className="mt-4 grid gap-3">
            {productDivisions.map((division) => (
              <Link
                key={division.slug}
                href={`/products?division=${division.slug}`}
                className="text-sm text-blue-50/72 transition-colors hover:text-white">
                {division.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <div className="mt-4 space-y-4 text-sm text-blue-50/78">
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 text-blue-50/50">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <address className="not-italic leading-6">
                {companyAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <span className="shrink-0 text-blue-50/50">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </span>
              <a
                href="mailto:enquiry@aspenpharma.co.in"
                className="transition-colors hover:text-white">
                enquiry@aspenpharma.co.in
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <span className="shrink-0 text-blue-50/50">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a
                href="tel:+910000000000"
                className="transition-colors hover:text-white">
                +91 00000 00000
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/12 px-5 py-5 text-center text-xs text-blue-50/62">
        © 2026 Aspen Pharmaceuticals Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
