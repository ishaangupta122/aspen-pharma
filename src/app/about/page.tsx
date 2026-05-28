import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Us | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Learn about Aspen Pharmaceuticals Pvt. Ltd., an independent Indian pharmaceutical company founded in 2010, including its founder's message, mission, vision, and core values.",
};

const businessModelItems = [
  {
    title: "Business-to-business (B2B)",
    desc: "We supply pharmaceutical products and surgical implants to healthcare professionals and institutions.",
  },
  {
    title: "Business-to-consumer (B2C)",
    desc: "We also offer select healthcare solutions directly to patients to support their medical needs.",
  },
];

const founderHighlights = [
  "Journey from Medical Representative to CEO",
  "Rs.1.7 lakh to Rs.20+ crore growth",
  "Conference management experience",
];

const missionItems = [
  {
    title: "Affordable Quality Healthcare",
    desc: "Making critical treatments accessible without compromising on manufacturing and distribution excellence.",
  },
  {
    title: "Ethical Business Practices",
    desc: "Upholding absolute transparency and moral responsibility in all regulatory and market operations.",
  },
  {
    title: "Long-term Doctor Relationships",
    desc: "Nurturing deep healthcare professional networks built on persistent trust and shared scientific insights.",
  },
];

const values = [
  {
    name: "Integrity",
    desc: "Honesty in every clinical assessment and corporate promise.",
  },
  {
    name: "Innovation",
    desc: "Constantly refining delivery and efficiency metrics.",
  },
  {
    name: "Patient Care",
    desc: "Placing global human wellness at the center of our pipeline.",
  },
  {
    name: "Transparency",
    desc: "Clear, open communication with partners and regulatory systems.",
  },
  {
    name: "Scientific Excellence",
    desc: "Strict adherence to verifiable data and pharmaceutical standards.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1 text-sm leading-7 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4 group">
          <span className="mt-2.5 size-2 shrink-0 bg-[#0F8B8D] rounded-full ring-4 ring-[#0F8B8D]/10 group-hover:scale-110 transition-transform" />
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white antialiased">
        <Hero />
        {/* SECTION 1: Company Overview Redesign */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              Company Overview
            </p>

            <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-stretch">
              <aside className="lg:col-span-5 lg:self-stretch">
                <div className="relative hidden h-full w-full overflow-hidden rounded-lg shadow-md lg:block">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
                    alt="Medical professional reviewing clinical assets"
                    fill
                    className="object-cover"
                  />
                </div>
              </aside>

              <div className="lg:col-span-7 grid gap-6">
                <div className="relative h-full overflow-hidden rounded-md border-l-4 border-[#0F8B8D] bg-[#F5F7FA] p-5 md:p-6 shadow-sm">
                  <div className="absolute top-4 right-6 text-7xl font-serif text-[#0F8B8D]/20 pointer-events-none select-none">
                    “
                  </div>
                  <blockquote className="text-xl font-medium leading-9 text-[#0B3C6D] relative z-10">
                    “Aspen Pharmaceuticals Pvt. Ltd. is an Indian Pharmaceutical
                    Company established in 2010.”
                  </blockquote>
                </div>

                <article className="h-full rounded-xl border border-slate-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium text-[#0B3C6D] border-b border-slate-100 pb-4">
                    Business Model
                  </h3>
                  <div className="mt-6 space-y-6">
                    {businessModelItems.map((item) => (
                      <div key={item.title}>
                        <h4 className="text-base font-semibold text-[#0B3C6D]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Founder's Message Redesign */}
        <section id="founder-message" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="rounded-md bg-[#0B3C6D] p-8 text-white lg:col-span-7 flex flex-col justify-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#92D6D7]/5 rounded-full blur-3xl" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
                  Founder&apos;s Message
                </p>
                <div className="mt-auto mb-2">
                  <h2 className="mt-6 text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl lg:leading-[1.2]">
                    A journey shaped by field experience, leadership, and
                    growth.
                  </h2>
                  <p className="mt-6 leading-8 text-blue-50/80 max-w-xl">
                    The founder&apos;s story reflects hands-on pharmaceutical
                    market understanding, from early field responsibilities to
                    leading a growing healthcare business.
                  </p>
                </div>
              </div>

              <div className="rounded-md border border-slate-200 bg-[#F5F7FA] p-8 lg:col-span-5 flex flex-col justify-center shadow-md relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0F8B8D]/5 rounded-lg -z-10" />
                <h3 className="text-xl font-semibold text-[#0B3C6D] border-b border-[#0B3C6D]/20 pb-3">
                  Milestones & Strengths
                </h3>
                <div className="mt-3">
                  <BulletList items={founderHighlights} />
                </div>
                <div className="mt-6 mb-2 border-t border-[#0B3C6D]/20 pt-3">
                  <p className="text-base font-bold text-[#0B3C6D]">
                    Anup Goyal
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Leadership, Aspen Pharmaceuticals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Vision & Mission Redesign */}
        <section id="vision-mission" className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Vision & Mission
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Built for better care and enduring
                <br />
                professional trust.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {missionItems.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-xl border border-slate-200/80 p-8 shadow-sm hover:border-[#0F8B8D]/40 hover:shadow-md transition-all duration-300 bg-white">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="h-1 w-12 bg-[#0F8B8D] group-hover:w-20 transition-all duration-300" />
                    <span className="text-xs font-mono font-bold text-slate-300 group-hover:text-[#0F8B8D]/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium leading-7 text-[#0B3C6D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Core Values Redesign */}
        {/* <section className="bg-[#F5F7FA] border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                  Core Values
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                  Principles that guide every relationship and decision.
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm leading-6 text-slate-600">
                Our operations stand firmly on architectural corporate pillars
                ensuring that ethics safety, and long-standing accountability
                remain uncompromised.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((val, index) => (
                <article
                  key={val.name}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[220px]">
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0F8B8D] opacity-60 group-hover:opacity-100 transition-opacity">
                      // 0{index + 1}
                    </p>
                    <h3 className="mt-6 text-xl font-medium text-[#0B3C6D] tracking-tight">
                      {val.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-xs leading-5 text-slate-600 border-t border-slate-50 pt-4">
                    {val.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
