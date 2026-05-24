import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { manufacturingPartnerDetails } from "@/lib/site-data";

export function getManufacturingPartner(slug: string) {
  return manufacturingPartnerDetails.find((partner) => partner.slug === slug);
}

export function PartnerPage({ slug }: { slug: string }) {
  const partner = getManufacturingPartner(slug);

  if (!partner) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
            <div>
              <Link href="/manufacturing" className="text-sm font-semibold text-[#0F8B8D]">
                Manufacturing partners
              </Link>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                {partner.index}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
                {partner.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{partner.intro}</p>
              {partner.logoNote ? (
                <p className="mt-5 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  {partner.logoNote}
                </p>
              ) : null}
            </div>
            <Image
              src="/images/aspen-manufacturing-hero.png"
              alt={`${partner.name} manufacturing partnership visual`}
              width={1400}
              height={1000}
              priority
              className="aspect-[1.35/1] w-full rounded-sm object-cover shadow-[0_24px_70px_rgba(11,60,109,0.13)]"
            />
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Focus
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D]">
                Manufacturing strengths
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {partner.focus.map((item, index) => (
                <article key={item} className="rounded-sm border border-slate-200 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-8 text-xl font-medium leading-7 text-[#0B3C6D]">{item}</h3>
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
