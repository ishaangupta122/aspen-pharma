import Link from "next/link";
import {
  companyAddress,
  manufacturingPartnerDetails,
  productDivisions,
} from "@/lib/site-data";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality", href: "/quality" },
  { label: "Research & Innovation", href: "/research-innovation" },
  { label: "Careers", href: "/careers" },
];

const supportLinks = [
  { label: "Doctor / Distributor Enquiry", href: "/enquiry" },
  { label: "Contact", href: "/contact" },
  { label: "Certifications", href: "/quality/certifications" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B3C6D] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.9fr_0.9fr] lg:px-10">
        <div>
          <p className="text-lg font-semibold">
            Aspen Pharmaceuticals Pvt. Ltd.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-blue-50/78">
            An independent Indian pharmaceutical company established in 2010,
            serving healthcare needs through ethical practices and reliable
            manufacturing partnerships.
          </p>
        </div>
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
        <div>
          <p className="text-sm font-semibold">Product Divisions</p>
          <div className="mt-4 grid gap-3">
            {productDivisions.map((division) => (
              <Link
                key={division.slug}
                href={`/products/${division.slug}`}
                className="text-sm text-blue-50/72 transition-colors hover:text-white">
                {division.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Contact</p>
          <div className="mt-4 space-y-3 text-sm leading-6 text-blue-50/78">
            <address className="not-italic">
              {companyAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p>enquiry@aspenpharma.co.in</p>
            <p>+91 00000 00000</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-row justify-between max-w-7xl gap-4 border-t border-white/12 px-5 py-6 sm:px-8 lg:px-10">
        {supportLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-medium uppercase tracking-[0.16em] text-blue-50/62 transition-colors hover:text-white">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="border-t border-white/12 px-5 py-5 text-center text-xs text-blue-50/62">
        © 2026 Aspen Pharmaceuticals Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
