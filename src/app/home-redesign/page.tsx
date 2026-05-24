import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { manufacturingPartners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Homepage Redesign | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "A redesigned homepage concept for Aspen Pharmaceuticals Pvt. Ltd. with global pharmaceutical positioning, specialty divisions, manufacturing partnerships, and enquiry flow.",
};

const specialtyDivisions = [
  {
    title: "Neurology",
    text: "Focused therapies supporting neurological practice and continuity of care.",
  },
  {
    title: "Psychiatry",
    text: "Ethical pharmaceutical solutions for specialist-led mental healthcare.",
  },
  {
    title: "Orthopaedics",
    text: "Reliable products for pain, mobility, and musculoskeletal wellness.",
  },
];

const productHighlights = [
  "Focused specialty portfolio",
  "Doctor-led product relevance",
  "Distribution-ready packaging",
  "Consistent availability planning",
];

const presenceMetrics = [
  { value: "2010", label: "Trusted Since" },
  { value: "PAN India", label: "Business Presence" },
  { value: "WHO-GMP", label: "Partner Infrastructure" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
      {children}
    </p>
  );
}

export default function HomeRedesignPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section id="home" className="overflow-hidden bg-[#F5F7FA]">
          <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.98fr] lg:px-10 lg:py-20">
            <div>
              <SectionLabel>Trusted Since 2010</SectionLabel>
              <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.06] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
                Delivering Trusted Healthcare Across India
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-650">
                Aspen Pharmaceuticals Pvt. Ltd. creates the first impression of
                a serious global-standard pharmaceutical company while remaining
                proudly independent and Indian.
              </p>
              <p className="mt-5 max-w-2xl border-l-2 border-[#0F8B8D] pl-5 text-sm leading-7 text-slate-600">
                Aspen Pharmaceuticals Pvt. Ltd. is an independent Indian
                pharmaceutical company and is not affiliated with any foreign
                pharmaceutical company with a similar name.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#enquiry"
                  className="inline-flex justify-center rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56]"
                >
                  Quick Enquiry
                </a>
                <a
                  href="#divisions"
                  className="inline-flex justify-center rounded-sm border border-slate-300 px-6 py-4 text-sm font-semibold text-[#0B3C6D] transition-colors hover:border-[#0F8B8D] hover:text-[#0F8B8D]"
                >
                  View Divisions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-[#0F8B8D]/15" />
              <Image
                src="/images/aspen-manufacturing-hero.png"
                alt="Modern pharmaceutical manufacturing and quality systems"
                width={1400}
                height={1000}
                priority
                className="relative aspect-[1.3/1] w-full rounded-sm object-cover shadow-[0_28px_80px_rgba(11,60,109,0.16)]"
              />
              <div className="relative -mt-10 ml-auto grid max-w-sm grid-cols-3 divide-x divide-slate-200 rounded-sm border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                {presenceMetrics.map((metric) => (
                  <div key={metric.label} className="p-4 text-center">
                    <p className="text-sm font-semibold text-[#0B3C6D]">{metric.value}</p>
                    <p className="mt-1 text-[11px] leading-4 text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
            <div>
              <SectionLabel>Company Introduction</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Science • Quality • Care
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-9 text-slate-700">
              <p>
                Aspen Pharmaceuticals Pvt. Ltd. is an independent Indian
                pharmaceutical company established in 2010, serving doctors,
                distributors, and business partners through ethical operations,
                focused specialty divisions, and quality manufacturing
                partnerships.
              </p>
              <p>
                The redesigned homepage positions Aspen as a premium,
                credible, modern pharmaceutical company with a clear hierarchy
                for clinical trust, manufacturing confidence, and quick enquiry.
              </p>
            </div>
          </div>
        </section>

        <section id="divisions" className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <SectionLabel>Specialty Divisions</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Focused divisions for specialist healthcare.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {specialtyDivisions.map((division) => (
                <article key={division.title} className="rounded-sm border border-slate-200 bg-white p-7">
                  <div className="mb-8 h-1 w-12 bg-[#0F8B8D]" />
                  <h3 className="text-2xl font-medium text-[#0B3C6D]">{division.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{division.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="manufacturing" className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
            <div>
              <SectionLabel>WHO-GMP Manufacturing Partnerships</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Built on quality-controlled manufacturing relationships.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Aspen collaborates with leading manufacturing partners across
                India operating with WHO-GMP certified infrastructure and
                disciplined production systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {manufacturingPartners.map((partner) => (
                <div
                  key={partner}
                  className="grid min-h-24 place-items-center rounded-sm border border-slate-200 bg-[#F8FAFC] px-4 text-center text-sm font-semibold text-[#0B3C6D]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
            <div>
              <SectionLabel>Product Highlights</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Product strategy designed for clinical relevance and partner confidence.
              </h2>
            </div>
            <div className="grid gap-3">
              {productHighlights.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-sm bg-white p-5 text-slate-700">
                  <span className="size-2 bg-[#0F8B8D]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-24">
            <div className="rounded-sm bg-[#0B3C6D] p-8 text-white lg:col-span-2">
              <SectionLabel>PAN India Presence</SectionLabel>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                Reaching healthcare partners across India with dependable execution.
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-blue-50/86">
                The homepage makes national presence visible early, reinforcing
                scale and distributor confidence without overclaiming.
              </p>
            </div>
            <div className="rounded-sm border border-slate-200 p-8">
              <SectionLabel>Leadership Message</SectionLabel>
              <blockquote className="mt-5 text-xl font-medium leading-9 text-[#0B3C6D]">
                “Committed to Better Patient Outcomes Since 2010”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-slate-700">Anup Goyal</p>
              <p className="mt-1 text-sm text-slate-500">Leadership, Aspen Pharmaceuticals</p>
            </div>
          </div>
        </section>

        <section id="enquiry" className="bg-[#F5F7FA]">
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
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]" placeholder="Full name" aria-label="Full name" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]" placeholder="Phone number" aria-label="Phone number" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]" placeholder="Email address" aria-label="Email address" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D]" placeholder="City / State" aria-label="City or state" />
              <textarea className="min-h-32 rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none transition-colors focus:border-[#0F8B8D] sm:col-span-2" placeholder="Tell us about your enquiry" aria-label="Enquiry message" />
              <button
                type="button"
                className="rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#082f56] sm:col-span-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
