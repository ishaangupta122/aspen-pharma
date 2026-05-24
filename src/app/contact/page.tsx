import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { companyAddress } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Contact Aspen Pharmaceuticals Pvt. Ltd. for corporate office details, phone, email, WhatsApp, and business enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              Contact Page
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
              Connect with Aspen Pharmaceuticals.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Reach the corporate office for product, distributor, franchise,
              and partnership enquiries.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
            <div className="space-y-5">
              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">Corporate Office</h2>
                <address className="mt-4 not-italic text-sm leading-7 text-slate-600">
                  {companyAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </article>
              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">Phone & Email</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>+91 00000 00000</p>
                  <p>enquiry@aspenpharma.co.in</p>
                </div>
              </article>
              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">WhatsApp & Social</h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="https://wa.me/910000000000" className="rounded-sm bg-[#0B3C6D] px-4 py-3 text-sm font-semibold text-white">
                    WhatsApp
                  </a>
                  <a href="#" className="rounded-sm border border-slate-200 px-4 py-3 text-sm font-semibold text-[#0B3C6D]">
                    LinkedIn
                  </a>
                </div>
              </article>
            </div>
            <div className="rounded-sm border border-slate-200 bg-[#F5F7FA] p-6">
              <div className="grid min-h-[360px] place-items-center rounded-sm border border-dashed border-slate-300 bg-white p-8 text-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    Map
                  </p>
                  <h2 className="mt-4 text-2xl font-medium text-[#0B3C6D]">
                    Sahibabad Industrial Area, Ghaziabad
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                    Map integration can be connected to Google Maps or another
                    approved provider before production launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
