import { CardGrid } from "@/components/CardGrid";
import { CtaSection } from "@/components/CtaSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import {
  certificationItems,
  manufacturingPartnerDetails,
  manufacturingPartners,
  productDivisions,
  qualityPillars,
  therapeuticSegments,
} from "@/lib/site-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
            <SectionHeader eyebrow="About Aspen" title="Independent, ethical, and built for long-term trust." />
            <div className="space-y-6 text-lg leading-9 text-slate-700">
              <p>
                Aspen Pharmaceuticals Pvt. Ltd. is an independent Indian
                pharmaceutical company established in 2010, focused on
                delivering quality healthcare solutions across India through
                innovation, ethical business practices, and reliable
                pharmaceutical manufacturing partnerships.
              </p>
              <p className="border-l-2 border-[#0F8B8D] pl-5 text-base leading-8 text-slate-600">
                Aspen Pharmaceuticals Pvt. Ltd. is not affiliated with any
                foreign pharmaceutical company with a similar name.
              </p>
            </div>
          </div>
        </section>

        <section id="products" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="Therapeutic Focus"
              title="Speciality Divisions"
              description="A focused portfolio serving doctors, distributors, and healthcare partners across essential therapeutic areas."
              align="center"
            />
            <div className="mt-12">
              <CardGrid items={therapeuticSegments} />
            </div>
          </div>
        </section>

        <section id="manufacturing" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="Manufacturing"
              title="Manufacturing Facilities"
              description="Aspen Pharmaceuticals collaborates with leading pharmaceutical manufacturing partners across India operating with WHO-GMP certified infrastructure and quality-controlled production systems."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {manufacturingPartners.map((partner) => (
                <Link
                  key={partner}
                  href="/manufacturing"
                  className="grid min-h-24 place-items-center rounded-sm border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D]/60"
                >
                  {partner}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeader
                eyebrow="Quality Commitment"
                title="Disciplined systems for dependable products."
                description="Every product relationship is shaped by careful partner selection, compliance-oriented systems, and consistent oversight from production through market readiness."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {qualityPillars.map((pillar, index) => (
                  <article key={pillar} className="rounded-sm border border-slate-200 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 text-xl font-medium text-[#0B3C6D]">{pillar}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Structured checks, documentation, and review practices help
                      ensure consistency, traceability, and reliability.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="Featured Products"
              title="Portfolio highlights by therapeutic division."
              description="A concise view of Aspen's product direction across specialist and primary care segments, with a downloadable portfolio overview."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {productDivisions.map((division) => (
                <Link
                  key={division.slug}
                  href={`/products/${division.slug}`}
                  className="rounded-sm border border-white/70 bg-white/78 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-lg font-medium text-[#0B3C6D]">{division.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Molecule categories, brand highlights, and scientific positioning.
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex justify-center rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56]"
              >
                View Product Tables
              </Link>
              <a
                href="/downloads/aspen-product-portfolio.pdf"
                download
                className="inline-flex justify-center rounded-sm border border-slate-300 px-6 py-4 text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D] hover:text-[#0F8B8D]"
              >
                Download Product PDF
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-24">
            <article className="rounded-sm bg-[#0B3C6D] p-8 text-white lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#92D6D7]">
                PAN India Presence
              </p>
              <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
                Nationwide healthcare commitment with partner-led execution.
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-blue-50/84">
                Aspen&apos;s network-oriented model supports doctors,
                distributors, and business partners across India through focused
                divisions, reliable manufacturing relationships, and responsive
                enquiry pathways.
              </p>
            </article>
            <article className="rounded-sm border border-slate-200 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Founder Message
              </p>
              <blockquote className="mt-5 text-2xl font-medium leading-9 text-[#0B3C6D]">
                “Trusted Healthcare Partner Since 2010”
              </blockquote>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                A field-led journey shaped by ethical business practices,
                team leadership, and long-term healthcare relationships.
              </p>
              <Link href="/about#founder-message" className="mt-6 inline-flex text-sm font-semibold text-[#0F8B8D]">
                Read message
              </Link>
            </article>
          </div>
        </section>

        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="Certifications"
              title="Quality assurance standards and systems."
              description="Aspen's manufacturing ecosystem is presented through recognized pharmaceutical quality references and disciplined compliance practices."
              align="center"
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certificationItems.map((item) => (
                <Link
                  key={item}
                  href="/quality/certifications"
                  className="rounded-sm border border-white/70 bg-white/78 p-7 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur"
                >
                  <p className="text-3xl font-medium text-[#0B3C6D]">{item}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Compliance-oriented quality reference
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
              <SectionHeader
                eyebrow="Corporate Slideshow Concept"
                title="A text-focused presentation for manufacturing credibility."
                description="Designed as a professional, pharma-grade story flow using partner logos, facility visuals, quality highlights, and contact details."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Aspen logo and trusted healthcare partner since 2010",
                  "Company introduction and independent Indian identity",
                  "Manufacturing excellence and partner capabilities",
                  "Quality assurance systems and nationwide commitment",
                ].map((slide, index) => (
                  <article key={slide} className="rounded-sm border border-slate-200 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      Slide {index + 1}
                    </p>
                    <h3 className="mt-5 text-lg font-medium leading-7 text-[#0B3C6D]">
                      {slide}
                    </h3>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-12 overflow-hidden border-y border-slate-200 py-5">
              <div className="flex min-w-max animate-[partner-slide_28s_linear_infinite] gap-4">
                {[...manufacturingPartnerDetails, ...manufacturingPartnerDetails].map((partner, index) => (
                  <span
                    key={`${partner.slug}-${index}`}
                    className="rounded-sm border border-slate-200 bg-[#F8FAFC] px-5 py-3 text-sm font-semibold text-[#0B3C6D]"
                  >
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
