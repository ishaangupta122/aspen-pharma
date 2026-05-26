"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Factory } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue, wrap } from "framer-motion";

export const manufacturingPartners = [
  { name: "Purobien", slug: "purobien", logo: "/purobien.png" },
  { name: "Akums", slug: "akums", logo: "/akums.webp" },
  { name: "Medicef", slug: "medicef", logo: "/medicef.png" },
  { name: "Akums", slug: "akums", logo: "/akums.webp" },
  { name: "Purobien", slug: "purobien", logo: "/purobien.png" },
  { name: "Medicef", slug: "medicef", logo: "/medicef.png" },

  // { name: "Enrico", slug: "enrico", logo: "/akums.webp" },
  // { name: "Gentech", slug: "gentech", logo: "/akums.webp" },
  // { name: "Elvia Care", slug: "elvia-care", logo: "/akums.webp" },
  // { name: "Lifevision", slug: "lifevision", logo: "/akums.webp" },
  // { name: "Ekantika", slug: "ekantika", logo: "/akums.webp" },
];

const CARD_WIDTH = 176; // w-44
const GAP = 24; // gap-6
const SPEED = 40; // px per second

function InfiniteMarquee({
  partners,
  paused,
}: {
  partners: typeof manufacturingPartners;
  paused: boolean;
}) {
  const x = useMotionValue(0);
  const trackWidth = partners.length * (CARD_WIDTH + GAP);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    const moveBy = (SPEED * delta) / 1000;
    const next = x.get() - moveBy;
    x.set(wrap(-trackWidth, 0, next));
  });

  const items = [...partners, ...partners];

  return (
    <motion.div style={{ x }} className="flex gap-6 will-change-transform">
      {items.map((partner, index) => (
        <Link
          key={`${partner.slug}-${index}`}
          href="/manufacturing"
          className="flex-shrink-0 w-44 flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-200 hover:-translate-y-0.5">
          <div className="flex size-30 items-center justify-center overflow-hidden">
            {partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                height={112}
                width={112}
                className="object-contain h-full"
              />
            ) : (
              <Factory className="size-10 stroke-[1.5] text-[#0F8B8D]" />
            )}
          </div>
        </Link>
      ))}
    </motion.div>
  );
}

export default function ManufacturingSection() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="manufacturing" className="bg-white overflow-hidden mt-10">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24 flex flex-col items-center text-center">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F8B8D]">
            Manufacturing Partners
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
            Manufacturing Facilities
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Pharmaceutical manufacturing partners across India operating with
            WHO-GMP certified infrastructure and quality-controlled production
            systems.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative mt-5 w-full mb-16 lg:mb-28 overflow-hidden cursor-pointer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <InfiniteMarquee partners={manufacturingPartners} paused={paused} />
      </div>
    </section>
  );
}
