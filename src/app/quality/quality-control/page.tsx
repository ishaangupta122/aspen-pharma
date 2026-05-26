import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { qualityControlItems } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";

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
        <HomeBanner
          eyebrow="Quality Assurance"
          title="Aspen's Quality Control Practices"
          description="Quality control at Aspen is presented as a disciplined system
                for checking materials, monitoring product stability, reviewing
                batches, and following documented SOP-led processes."
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-4 md:grid-cols-4">
              {qualityControlItems.map((item, index) => (
                <article
                  key={item}
                  className="rounded-sm border border-slate-200 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-8 text-xl font-medium leading-7 text-[#0B3C6D]">
                    {item}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Controlled review practices help support product
                    consistency, traceability, and reliability across
                    manufacturing stages.
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
