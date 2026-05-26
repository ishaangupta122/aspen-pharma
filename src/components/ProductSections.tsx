import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { productDivisions } from "@/lib/site-data";

// Move this array or interface to your types file if needed
interface ProductDivision {
  slug: string;
  title: string;
  description: string; // Added to prevent duplicate placeholder text
}

export default function ProductsSection() {
  return (
    <section id="products" className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeader
          eyebrow="Featured Products"
          title="Product highlights by therapeutic division."
          description="A concise view of Aspen's product direction across specialist and primary care segments, with a downloadable portfolio overview."
        />

        {/* Divisions Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {productDivisions.map((division) => (
            <Link
              key={division.slug}
              href={`/products/${division.slug}`}
              className="group flex flex-col justify-between rounded-sm border border-slate-200/60 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 ease-in-out hover:border-[#0F8B8D]/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div>
                <h3 className="text-lg font-semibold text-[#0B3C6D] transition-colors group-hover:text-[#0F8B8D]">
                  {division.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {division.description}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-[#0B3C6D] group-hover:text-[#0F8B8D]">
                <span>Explore</span>
                <svg
                  className="ml-1.5 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/products"
            className="inline-flex justify-center rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#082f56]">
            View Product Tables
          </Link>
          <a
            href="/downloads/aspen-product-portfolio.pdf"
            download
            className="inline-flex justify-center rounded-sm border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-[#0B3C6D] shadow-sm transition-colors duration-200 hover:border-[#0F8B8D] hover:text-[#0F8B8D]">
            Download Product PDF
          </a>
        </div>
      </div>
    </section>
  );
}
