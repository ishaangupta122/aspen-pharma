import { CardGrid } from "@/components/CardGrid";
import CertificationsSection from "@/components/CertificationsSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import ManufacturingSection from "@/components/MaufacturingSection";
import { Navbar } from "@/components/Navbar";
import ProductsSection from "@/components/ProductSections";
import QualityCommitmentSection from "@/components/QualitySections";
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* <section id="about" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
            <SectionHeader
              eyebrow="About Aspen"
              title="Independent, ethical, and built for long-term trust."
            />
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
        </section> */}

        <ProductsSection />

        {/* <section id="divisions" className="bg-white">
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
        </section> */}

        {/* <section id="manufacturing" className="bg-[#F5F7FA]">
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
                  className="grid min-h-24 place-items-center rounded-sm border border-slate-200 bg-white px-4 text-center text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D]/60">
                  {partner}
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        <ManufacturingSection />

        <QualityCommitmentSection />

        {/* <section id="quality" className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionHeader
                eyebrow="Quality Commitment"
                title="Disciplined systems for dependable products."
                description="Every product relationship is shaped by careful partner selection, compliance-oriented systems, and consistent oversight from production through market readiness."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {qualityPillars.map((pillar, index) => (
                  <article
                    key={pillar}
                    className="rounded-sm border border-slate-200 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-5 text-xl font-medium text-[#0B3C6D]">
                      {pillar}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      Structured checks, documentation, and review practices
                      help ensure consistency, traceability, and reliability.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <CertificationsSection />

        <section id="pan" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-20">
            {/* PAN India Presence Card */}
            <article className="rounded-sm bg-[#0B3C6D] p-7 text-white lg:col-span-2 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#92D6D7]">
                PAN India Presence
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Nationwide healthcare access driven by strategic distribution.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50/80">
                Aspen&apos;s operational footprint supports practitioners,
                distributors, and partners across India. Through dedicated
                therapeutic divisions and audited manufacturing alignments, we
                ensure seamless delivery of high-integrity care.
              </p>
            </article>

            {/* Leadership Message Card */}
            <article className="rounded-sm border border-slate-200 p-7 flex flex-col justify-between bg-slate-50/30">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                  Leadership Message
                </p>
                <blockquote className="mt-4 text-xl font-bold leading-8 text-[#0B3C6D]">
                  “Committed to Better Patient Outcomes Since 2010”
                </blockquote>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Our journey is defined by rigid compliance, ethical standards,
                  and value-driven leadership fostering long-term therapeutic
                  partnerships.
                </p>
              </div>

              {/* Founder Identity & Call to Action */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-sm font-bold text-[#0B3C6D]">Anup Goyal</h4>
                <p className="text-xs text-slate-500">
                  Leadership, Aspen Pharmaceuticals
                </p>

                <Link
                  href="/about#founder-message"
                  className="mt-4 inline-flex items-center text-xs font-bold text-[#0F8B8D] hover:text-[#0b6364] transition-colors">
                  Read Full Message <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* <section id="enquiry" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
            <div>
              <SectionLabel>Quick Enquiry Form</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Start a business conversation with Aspen.
              </h2>
              <p className="mt-6 leading-8 text-slate-600">
                A short enquiry form gives doctors, distributors, and partners a
                direct path to contact the company.
              </p>
            </div>
            <form className="grid gap-4 rounded-sm border border-slate-200 bg-white p-6 sm:grid-cols-2">
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]"
                placeholder="Full name"
                aria-label="Full name"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]"
                placeholder="Phone number"
                aria-label="Phone number"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]"
                placeholder="Email address"
                aria-label="Email address"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]"
                placeholder="City / State"
                aria-label="City or state"
              />
              <textarea
                className="min-h-32 rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D] sm:col-span-2"
                placeholder="Tell us about your enquiry"
                aria-label="Enquiry message"
              />
              <button
                type="button"
                className="rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56] sm:col-span-2">
                Submit Enquiry
              </button>
            </form>
          </div>
        </section> */}

        {/* <section id="slideshow" className="bg-white">
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
                  <article
                    key={slide}
                    className="rounded-sm border border-slate-200 p-6">
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
                {[
                  ...manufacturingPartnerDetails,
                  ...manufacturingPartnerDetails,
                ].map((partner, index) => (
                  <span
                    key={`${partner.slug}-${index}`}
                    className="rounded-sm border border-slate-200 bg-[#F8FAFC] px-5 py-3 text-sm font-semibold text-[#0B3C6D]">
                    {partner.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* <CtaSection /> */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
