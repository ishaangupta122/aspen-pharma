import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { manufacturingPartnerDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Manufacturing Facilities | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals collaborates with leading WHO-GMP certified pharmaceutical manufacturers across India for quality, consistency, safety, and innovation.",
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Manufacturing Facilities
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
                World-Class Manufacturing Partnerships
              </h1>
              <p className="mt-6 max-w-2xl border-l-2 border-[#0F8B8D] pl-5 text-lg leading-9 text-slate-700">
                Aspen Pharmaceuticals Pvt. Ltd. collaborates with leading
                WHO-GMP certified pharmaceutical manufacturers across India to
                ensure high standards of quality, consistency, safety, and
                innovation.
              </p>
            </div>
            <Image
              src="/images/aspen-manufacturing-hero.png"
              alt="Modern pharmaceutical manufacturing systems"
              width={1400}
              height={1000}
              priority
              className="aspect-[1.35/1] w-full rounded-sm object-cover shadow-[0_24px_70px_rgba(11,60,109,0.13)]"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Manufacturing Partners
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Partner facilities supporting Aspen&apos;s quality promise.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {manufacturingPartnerDetails.map((partner) => (
                <Link
                  key={partner.slug}
                  href={`/manufacturing/${partner.slug}`}
                  className="group rounded-sm border border-slate-200 p-7 transition-colors hover:border-[#0F8B8D]/60"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                        {partner.index}
                      </p>
                      <h3 className="mt-4 text-2xl font-medium text-[#0B3C6D]">
                        {partner.name}
                      </h3>
                    </div>
                    <span className="text-xl text-[#0F8B8D]">↗</span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{partner.intro}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {partner.focus.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-sm bg-[#F5F7FA] px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
