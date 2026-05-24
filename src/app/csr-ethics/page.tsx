import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { csrItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "CSR & Ethics | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals emphasizes ethical marketing, social contribution, and healthcare awareness.",
};

export default function CsrEthicsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#0B3C6D] text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
              CSR & Ethics
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Responsible growth guided by ethical healthcare practices.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/82">
              Aspen&apos;s public presence is built around trust, responsible
              communication, community awareness, and long-term relationships
              across the healthcare ecosystem.
            </p>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3 lg:px-10 lg:py-24">
            {csrItems.map((item) => (
              <article key={item} className="rounded-sm border border-slate-200 bg-white p-8">
                <div className="mb-8 h-1 w-12 bg-[#0F8B8D]" />
                <h2 className="text-2xl font-medium text-[#0B3C6D]">{item}</h2>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  A clear commitment to conduct that protects trust, improves
                  awareness, and supports healthcare communities.
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
