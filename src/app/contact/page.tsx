import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { companyAddress } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";

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
        <HomeBanner
          eyebrow="Get in Touch"
          title="Connect with Aspen Pharmaceuticals."
          description="Contact us for product information, distributor opportunities, franchise partnerships, and general enquiries. Our team is ready to assist you."
        />

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
            <div className="space-y-5">
              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">
                  Corporate Office
                </h2>
                <address className="mt-4 not-italic text-sm leading-7 text-slate-600">
                  {companyAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </article>

              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">
                  Phone & Email
                </h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>+91 00000 00000</p>
                  <p>enquiry@aspenpharma.co.in</p>
                </div>
              </article>

              <article className="rounded-sm border border-slate-200 p-6">
                <h2 className="text-xl font-medium text-[#0B3C6D]">
                  WhatsApp & Social
                </h2>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/910000000000"
                    className="rounded-sm bg-[#0B3C6D] px-4 py-3 text-sm font-semibold text-white">
                    WhatsApp
                  </a>
                  <a
                    href="#"
                    className="rounded-sm border border-slate-200 px-4 py-3 text-sm font-semibold text-[#0B3C6D]">
                    LinkedIn
                  </a>
                </div>
              </article>
            </div>

            <div className="rounded-sm border border-slate-200 bg-white p-6">
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1923635332496!2d77.3776564755823!3d28.683891781746386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf11cd9ea9643%3A0xed12e41b8e504748!2sASPEN%20PHARMACEUTICALS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1779811523186!5m2!1sen!2sin"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aspen Pharmaceuticals Location"
                  className="w-full"
                />
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Sahibabad Industrial Area, Ghaziabad
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/HFHtSjKReUsrPSjf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-[#0B3C6D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#082e53]">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
