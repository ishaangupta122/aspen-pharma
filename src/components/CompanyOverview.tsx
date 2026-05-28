"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    overviewStats.map(() => 0),
  );

  const statTargets = useMemo(() => {
    return overviewStats.map((stat) => {
      const match = stat.value.match(/(\d+)/);
      const numeric = match ? Number(match[1]) : 0;
      const suffix = stat.value.replace(String(numeric), "").trim();
      return { numeric, suffix };
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          const duration = 1200;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setAnimatedValues(
              statTargets.map((target) =>
                Math.round(target.numeric * progress),
              ),
            );
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [statTargets]);

  return (
    <section id="overview" className="bg-white" ref={sectionRef}>
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

          <div className="grid gap-4 sm:grid-cols-2">
            {overviewStats.map((stat, index) => (
              <article
                key={stat.label}
                className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-3xl font-semibold text-[#0B3C6D]">
                      {animatedValues[index]}
                      {statTargets[index].suffix}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#0B3C6D]">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {stat.sublabel}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0F8B8D]/40 bg-[#0F8B8D]/10 text-lg">
                    {stat.icon}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
