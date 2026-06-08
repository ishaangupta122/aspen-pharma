"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Clock3, Users, UserRound, BadgeCheck } from "lucide-react";

const impactStats = [
  {
    value: "20k+",
    label: "Satisfied Patients",
    icon: Users,
  },
  {
    value: "120+",
    label: "Experienced Doctors",
    icon: UserRound,
  },
  {
    value: "24/7",
    label: "Availability & Support",
    icon: Clock3,
  },
  {
    value: "<90 sec",
    label: "Average Wait Time",
    icon: BadgeCheck,
  },
];

export function ImpactStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    impactStats.map(() => 0),
  );

  const statTargets = useMemo(() => {
    return impactStats.map((stat) => {
      const match = stat.value.match(/(\d+)/);
      const numeric = match ? Number(match[1]) : 0;
      const prefix = stat.value.startsWith("<") ? "<" : "";
      const suffix = stat.value
        .replace(prefix, "")
        .replace(String(numeric), "")
        .trim();

      return { numeric, prefix, suffix };
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
    <section className="bg-white" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="px-5 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="flex items-center gap-4 rounded-sm px-4 py-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#0F8B8D]/25 text-[#0F8B8D]">
                    <Icon className="h-10 w-10" strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-[#0B3C6D]">
                      {statTargets[index].prefix}
                      {animatedValues[index]}
                      {statTargets[index].suffix}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
