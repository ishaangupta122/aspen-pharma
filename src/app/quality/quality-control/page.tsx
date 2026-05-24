import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { qualityControlItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Quality Control | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals quality control practices include raw material testing, stability testing, batch monitoring, and SOP systems.",
};

export default function QualityControlPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Quality Assurance
              </p>
              <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl">
                Quality Control
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Quality control at Aspen is presented as a disciplined system
                for checking materials, monitoring product stability, reviewing
                batches, and following documented SOP-led processes.
              </p>
            </div>
            <Image
              src="/images/aspen-manufacturing-hero.png"
              alt="Quality control laboratory systems"
              width={1400}
              height={1000}
              priority
              className="aspect-[1.35/1] w-full rounded-sm object-cover shadow-[0_24px_70px_rgba(11,60,109,0.13)]"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-4 md:grid-cols-4">
              {qualityControlItems.map((item, index) => (
                <article key={item} className="rounded-sm border border-slate-200 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-8 text-xl font-medium leading-7 text-[#0B3C6D]">
                    {item}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Controlled review practices help support product consistency,
                    traceability, and reliability across manufacturing stages.
                  </p>
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
