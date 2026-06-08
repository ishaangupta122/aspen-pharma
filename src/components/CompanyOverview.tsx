"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const overviewStats = [
  {
    value: "8",
    label: "Manufacturing plants",
    sublabel: "WHO-GMP aligned partners",
    icon: "🏭",
  },
  {
    value: "800+",
    label: "Scientific experts",
    sublabel: "Formulation and quality teams",
    icon: "🧪",
  },
  {
    value: "2000+",
    label: "Product registrations",
    sublabel: "Across multiple therapy lines",
    icon: "✅",
  },
  {
    value: "50+",
    label: "Markets served",
    sublabel: "Pan-India distribution network",
    icon: "🌍",
  },
];

export function CompanyOverview() {
  return (
    <section id="overview" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              An Overview
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
              A trusted Indian pharmaceutical partner built for scale.
            </h2>
            <p className="text-base leading-7 text-slate-600">
              Aspen Pharmaceuticals Pvt. Ltd. combines focused therapeutic
              divisions with a robust manufacturing ecosystem. Our nationwide
              presence is built on quality systems, ethical practices, and
              long-term relationships across healthcare networks.
            </p>
            <div className="flex items-center gap-4">
              <span className="h-px w-16 bg-[#0F8B8D]" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                Trusted since 2010
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/banner.png"
              alt="Company overview visual"
              width={700}
              height={400}
              className="rounded-sm border border-slate-200 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
