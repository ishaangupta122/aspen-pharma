import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { certificationItems, qualityControlItems } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";

export const metadata: Metadata = {
  title: "Quality Assurance | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Explore Aspen Pharmaceuticals quality assurance systems, including quality control, raw material testing, stability testing, batch monitoring, SOP systems, and certifications.",
};

const qualityPages = [
  {
    title: "Quality Control",
    href: "/quality/quality-control",
    description:
      "Structured checks across raw materials, stability, batch review, and SOP-led production oversight.",
    items: qualityControlItems,
  },
  {
    title: "Certifications",
    href: "/quality/certifications",
    description:
      "A clear view of certification standards associated with Aspen's manufacturing ecosystem.",
    items: certificationItems,
  },
];

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HomeBanner
          eyebrow="Quality Assurance"
          title="Quality systems designed for reliable pharmaceutical outcomes."
          description=" Aspen Pharmaceuticals focuses on disciplined quality assurance
                through partner selection, quality-controlled production
                systems, documented procedures, and dependable batch oversight."
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Sub-pages
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Explore Aspen quality in detail.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {qualityPages.map((page) => (
                <a
                  key={page.title}
                  href={page.href}
                  className="group rounded-sm border border-slate-200 p-7 transition-colors hover:border-[#0F8B8D]/60">
                  <h3 className="text-2xl font-medium text-[#0B3C6D]">
                    {page.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {page.description}
                  </p>
                  {/* <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {page.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-sm bg-[#F5F7FA] px-4 py-3 text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div> */}
                  <span className="mt-8 inline-flex text-sm font-semibold text-[#0F8B8D]">
                    View details
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
