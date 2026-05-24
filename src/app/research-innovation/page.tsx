import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { researchItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Research & Innovation | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals focuses on product development, market research, updated formulations, and future-ready healthcare solutions.",
};

export default function ResearchInnovationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              Research & Innovation
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
              Practical innovation for relevant healthcare solutions.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Aspen&apos;s research orientation is focused on product relevance,
              market understanding, updated formulations, and future-ready
              healthcare solutions aligned with doctor and patient needs.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-24">
            {researchItems.map((item, index) => (
              <article key={item} className="rounded-sm border border-slate-200 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                  0{index + 1}
                </p>
                <h2 className="mt-8 text-xl font-medium leading-7 text-[#0B3C6D]">{item}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A disciplined approach to keeping the product portfolio useful,
                  current, and aligned with evolving healthcare expectations.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
