import Image from "next/image";
import Link from "next/link";
import { bannerMessages } from "@/lib/site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
      {children}
    </p>
  );
}

const presenceMetrics = [
  { value: "2010", label: "Trusted\nSince" },
  { value: "PAN India", label: "Business Presence" },
  { value: "WHO-GMP", label: "Partner Infrastructure" },
];

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.98fr] lg:px-10 lg:py-20">
        <div>
          <SectionLabel>Trusted Since 2010</SectionLabel>
          <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.06] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
            Delivering Trusted Healthcare Across India
          </h1>
          {/* <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-650">
            Aspen Pharmaceuticals Pvt. Ltd. creates the first impression of a
            serious global-standard pharmaceutical company while remaining
            proudly independent and Indian.
          </p> */}
          <p className="mt-5 max-w-2xl border-l-2 border-[#0F8B8D] pl-5 text-base leading-7 text-slate-600">
            Aspen Pharmaceuticals Pvt. Ltd. creates the first impression of a
            serious global-standard pharmaceutical company while remaining
            proudly independent and Indian.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/enquiry"
              className="inline-flex justify-center rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56]">
              Quick Enquiry
            </Link>
            <Link
              href="/divisions"
              className="inline-flex justify-center rounded-sm border border-slate-300 px-6 py-4 text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D] hover:text-[#0F8B8D]">
              View Divisions
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-[#0F8B8D]/15" />
          <Image
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200"
            alt="Modern pharmaceutical manufacturing and quality systems"
            width={1400}
            height={1000}
            priority
            className="relative aspect-[1.3/1] w-full rounded-sm object-cover shadow-[0_28px_80px_rgba(11,60,109,0.16)]"
          />
          <div className="relative -mt-10 ml-auto grid max-w-sm grid-cols-3 divide-x divide-slate-200 rounded-sm border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            {presenceMetrics.map((metric) => (
              <div key={metric.label} className="p-4 text-center">
                <p className="text-sm font-semibold text-[#0B3C6D]">
                  {metric.value}
                </p>
                <p className="mt-1 font-bold text-[11px] leading-4 tracking-normal whitespace-pre-line text-[#0F8B8D]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
