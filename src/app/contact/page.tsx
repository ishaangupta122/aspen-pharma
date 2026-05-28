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
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:px-10 lg:py-24">
            <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1923635332496!2d77.3776564755823!3d28.683891781746386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf11cd9ea9643%3A0xed12e41b8e504748!2sASPEN%20PHARMACEUTICALS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1779811523186!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aspen Pharmaceuticals Location"
                  className="w-full"
                />
              </div>

              <div className="mt-6 grid gap-6 border-t border-slate-200 pt-6 text-sm text-slate-600 lg:grid-cols-2">
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      Address
                    </p>
                    <address className="mt-2 not-italic leading-6 font-medium">
                      {companyAddress.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      Office Hours
                    </p>
                    <p className="mt-2 font-medium">
                      <span className="font-medium">Monday - Saturday: </span>
                      9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
                <div className="space-y-7 ">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      Phone
                    </p>
                    <p className="mt-2 font-medium">+91 00000 00000</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                      Email
                    </p>
                    <p className="mt-2 font-medium">
                      enquiry@aspenpharma.co.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full rounded-sm border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-medium text-[#0B3C6D]">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share your requirements and our team will get back to you.
              </p>
              <form className="mt-6 space-y-3">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                    Enquiry Type
                    <span className="ml-1 text-[#0F8B8D]">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    className="mt-1 w-full rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20">
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Distributor Inquiry</option>
                    <option>Manufacturing Partnership</option>
                    <option>Customer Support</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                    Full Name
                    <span className="ml-1 text-[#0F8B8D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="mt-1 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                    Phone Number
                    <span className="ml-1 text-[#0F8B8D]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                    Email Address
                    <span className="ml-1 text-[#0F8B8D]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 w-full rounded-sm border border-slate-200 px-4 py-3 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3C6D]">
                    Message
                    <span className="ml-1 text-[#0F8B8D]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirement"
                    className="mt-1 w-full rounded-sm border border-slate-200 px-4 pt-3 pb-7 text-sm text-[#0B3C6D] outline-none transition focus:border-[#0F8B8D] focus:ring-2 focus:ring-[#0F8B8D]/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-[#0B3C6D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#082e53]">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
