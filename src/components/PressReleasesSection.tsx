"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

const releases = [
  {
    date: "May 22, 2026",
    title: "Financial Results",
    excerpt: "Aspen announces Q4 FY26 results",
  },
  {
    date: "March 21, 2026",
    title: "Product Launch",
    excerpt:
      "Aspen launches oral and injectable formulations of a new therapy kjanvkja akmvkakn kjanva. vkajvknav kjnvad vjknadvjka jkvnjkandv",
  },
  {
    date: "February 13, 2026",
    title: "Financial Results",
    excerpt: "Aspen announces Q3 FY26 results",
  },
  {
    date: "November 7, 2025",
    title: "Financial Results",
    excerpt: "Aspen announces interim financial results",
  },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function PressReleasesSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((direction: "left" | "right") => {
    const container = scrollerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="press-releases" className="bg-[#F3F7FA]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeader
          eyebrow="Press Releases"
          title="Press Releases"
          description="News about Aspen Pharmaceuticals."
        />

        <div className="flex items-center justify-between gap-3">
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/press"
              className="text-sm font-semibold text-[#0B3C6D]">
              View all press releases &rarr;
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-[#0B3C6D]/20 bg-[#0B3C6D] text-[#0B3C6D] transition hover:bg-[#0B3C6D]/90">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
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
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border border-[#0B3C6D]/20 bg-[#0B3C6D] text-[#0B3C6D] transition hover:bg-[#0B3C6D]/90">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex gap-6 overflow-x-auto scroll-smooth pb-4">
          {releases.map((item) => {
            const slug = slugify(item.title + " " + item.date);
            return (
              <Link
                key={item.date}
                href={`/press/${slug}`}
                className="group block w-[50%] sm:w-[33.333%] lg:w-[25%] rounded-lg border border-slate-200 bg-white">
                <div className="overflow-hidden rounded-t-lg bg-linear-to-r from-[#0B3C6D] to-[#082f56] px-5 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">{item.date}</span>
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="p-5 flex h-40 flex-col rounded-b-lg justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[#0B3C6D] group-hover:underline">
                      {item.title}
                    </h4>
                    <p
                      className="mt-2 text-base text-slate-500 text-ellipsis overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
