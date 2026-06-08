"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { productDivisions } from "@/lib/site-data";

const divisionImages: Record<string, { src: string; alt: string }> = {
  neurology: {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
    alt: "Neurology care and diagnostics",
  },
  psychiatry: {
    src: "https://images.unsplash.com/photo-1504814532849-92738115481a?auto=format&fit=crop&q=80&w=1200",
    alt: "Mental health consultation",
  },
  orthopaedics: {
    src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=1200",
    alt: "Orthopaedic care and rehabilitation",
  },
  "cardiac-diabetic": {
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200",
    alt: "Cardiac monitoring and diabetic care",
  },
  "general-medicine": {
    src: "https://images.unsplash.com/photo-1580281657525-8b47f68179a4?auto=format&fit=crop&q=80&w=1200",
    alt: "General medicine consultation",
  },
};

export default function ProductsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((direction: "left" | "right") => {
    const container = scrollerRef.current;
    if (!container) {
      return;
    }

    const scrollAmount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="products" className="bg-[#0B3C6D]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeader
          eyebrow="Featured Products"
          title="Product highlights by therapeutic division."
          description="A concise view of Aspen's product direction across specialist and primary care segments, with a downloadable portfolio overview."
          eyebrowClass="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#92D6D7]"
          titleClass="text-3xl font-medium tracking-tight text-white sm:text-4xl"
          descriptionClass="mt-5 text-base leading-8 text-slate-200 sm:text-lg"
        />

        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-white text-[#0B3C6D] transition hover:bg-[#f3f7fa]">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-white/20 bg-white text-[#0B3C6D] transition hover:bg-[#f3f7fa]">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Divisions Scroller */}
        <div
          ref={scrollerRef}
          className="mt-6 flex gap-5 overflow-x-auto scroll-smooth pb-2">
          {productDivisions.map((division) => (
            <Link
              key={division.slug}
              href={`/products?division=${division.slug}`}
              className="group flex h-full flex-none flex-col overflow-hidden rounded-sm border border-slate-200/60 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-all duration-300 ease-in-out hover:border-[#0F8B8D]/30 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:w-[70%] md:w-[calc(50%-12px)] lg:w-[calc(25%-15px)]">
              <div className="relative h-70 w-full">
                <Image
                  src={divisionImages[division.slug]?.src ?? ""}
                  alt={divisionImages[division.slug]?.alt ?? division.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 items-center justify-between gap-3 px-6 py-2">
                <h3 className="text-lg font-semibold text-[#0B3C6D] transition-colors group-hover:text-[#0F8B8D]">
                  {division.title}
                </h3>
                <svg
                  className="h-4 w-4 text-[#0F8B8D] transition-transform duration-200 group-hover:translate-x-1"
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
            className="inline-flex justify-center rounded-sm bg-white px-6 py-4 text-sm font-semibold text-[#0B3C6D] shadow-sm transition-colors duration-200 hover:bg-[#f3f7fa]">
            All Products
          </Link>
          <a
            href="/downloads/aspen-product-portfolio.pdf"
            download
            className="inline-flex justify-center rounded-sm border border-white/30 bg-transparent px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:border-white/60 hover:text-white">
            Download Product PDF
          </a>
        </div>
      </div>
    </section>
  );
}
