import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { certificationItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Certifications | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals highlights quality assurance certification standards including WHO-GMP, ISO, GLP, and GMP.",
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#0B3C6D] text-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
              Quality Assurance
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Certifications and quality standards.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50/82">
              Aspen presents its quality assurance framework through recognized
              pharmaceutical manufacturing and laboratory standards associated
              with trusted production systems.
            </p>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificationItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-sm border border-slate-200 bg-white p-8">
                  <div className="mb-10 grid size-14 place-items-center rounded-sm bg-[#EAF4F4] text-sm font-semibold text-[#0F8B8D]">
                    QA
                  </div>
                  <h2 className="text-3xl font-medium text-[#0B3C6D]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    A recognized quality standard supporting disciplined,
                    documented, and compliance-oriented pharmaceutical
                    operations.
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
