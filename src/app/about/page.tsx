import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About Us | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Learn about Aspen Pharmaceuticals Pvt. Ltd., an independent Indian pharmaceutical company founded in 2010, including its founder's message, mission, vision, and core values.",
};

const overviewItems = [
  "Founded in 2010",
  "Independent Indian pharmaceutical company",
  "No relation with South African Aspen",
];

const founderHighlights = [
  "Journey from Medical Representative to CEO",
  "Rs.1.7 lakh to Rs.20+ crore growth",
  "Team leadership",
  "Conference management experience",
];

const missionItems = [
  "Affordable quality healthcare",
  "Ethical business practices",
  "Long-term doctor relationships",
];

const values = [
  "Integrity",
  "Innovation",
  "Patient care",
  "Transparency",
  "Scientific excellence",
];

function PageIntro() {
  return (
    <section className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
          About Us
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
            Independent Indian pharmaceutical company founded on trust.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Aspen Pharmaceuticals Pvt. Ltd. was established in 2010 with a clear
            commitment to affordable quality healthcare, ethical practices, and
            long-term relationships with doctors and business partners.
          </p>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 size-1.5 shrink-0 bg-[#0F8B8D]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <PageIntro />

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10 lg:py-24">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Company Overview
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D]">
                Founded in 2010. Independent by identity.
              </h2>
            </aside>

            <div className="space-y-10">
              <article className="rounded-sm border border-slate-200 p-7">
                <h3 className="text-xl font-medium text-[#0B3C6D]">Overview</h3>
                <div className="mt-6">
                  <BulletList items={overviewItems} />
                </div>
              </article>

              <blockquote className="border-l-4 border-[#0F8B8D] bg-[#F5F7FA] p-7 text-xl font-medium leading-9 text-[#0B3C6D]">
                “Aspen Pharmaceuticals Pvt. Ltd. is an independent Indian
                pharmaceutical company established in 2010 and is not affiliated
                with any foreign entity having a similar name.”
              </blockquote>
            </div>
          </div>
        </section>

        <section id="founder-message" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-24">
            <div className="rounded-sm bg-[#0B3C6D] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
                Founder&apos;s Message
              </p>
              <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
                A journey shaped by field experience, leadership, and growth.
              </h2>
              <p className="mt-6 leading-8 text-blue-50/86">
                The founder&apos;s story reflects hands-on pharmaceutical market
                understanding, from early field responsibilities to leading a
                growing healthcare business.
              </p>
            </div>
            <div className="rounded-sm border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-medium text-[#0B3C6D]">Message Highlights</h3>
              <div className="mt-6">
                <BulletList items={founderHighlights} />
              </div>
            </div>
          </div>
        </section>

        <section id="vision-mission" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Vision & Mission
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Built for better care and enduring professional trust.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {missionItems.map((item) => (
                <article key={item} className="rounded-sm border border-slate-200 p-6">
                  <div className="mb-7 h-1 w-10 bg-[#0F8B8D]" />
                  <h3 className="text-lg font-medium leading-7 text-[#0B3C6D]">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Core Values
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Principles that guide every relationship and decision.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => (
                <article key={value} className="rounded-sm border border-slate-200 bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-8 text-xl font-medium text-[#0B3C6D]">{value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
