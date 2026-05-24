import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Doctor & Distributor Enquiry | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Submit product enquiries, franchise enquiries, and distributor applications for Aspen Pharmaceuticals.",
};

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              Doctor / Distributor Enquiry Portal
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
              A direct enquiry path for healthcare and business partners.
            </h1>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
            <div className="grid gap-4">
              {["Product enquiry", "Franchise enquiry", "Distributor application"].map((item) => (
                <article key={item} className="rounded-sm border border-slate-200 p-6">
                  <h2 className="text-xl font-medium text-[#0B3C6D]">{item}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Share the details needed for Aspen&apos;s team to review and
                    respond professionally.
                  </p>
                </article>
              ))}
            </div>
            <form className="grid gap-4 rounded-sm border border-slate-200 p-6 sm:grid-cols-2">
              <select className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" aria-label="Enquiry type" defaultValue="">
                <option value="" disabled>Enquiry type</option>
                <option>Product enquiry</option>
                <option>Franchise enquiry</option>
                <option>Distributor application</option>
              </select>
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Full name" aria-label="Full name" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Phone number" aria-label="Phone number" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Email address" aria-label="Email address" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="City / State" aria-label="City or state" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Organization / Clinic" aria-label="Organization or clinic" />
              <textarea className="min-h-32 rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D] sm:col-span-2" placeholder="Message" aria-label="Message" />
              <button type="button" className="rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white hover:bg-[#082f56] sm:col-span-2">
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
