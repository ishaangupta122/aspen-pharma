import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import HomeBanner from "@/components/HomeBanner";

export const metadata: Metadata = {
  title: "Careers | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Explore career opportunities at Aspen Pharmaceuticals, including team culture, why join Aspen, and an application form.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HomeBanner
          eyebrow="Join Our Team"
          title="Build a meaningful pharmaceutical career with Aspen."
          description="Join a company shaped by field experience, ethical practices, and a practical commitment to healthcare partnerships."
        />

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
            <div>
              <div className="grid gap-4">
                {[
                  {
                    title: "Why Join Aspen",
                    description:
                      "Work in a growth-focused pharmaceutical environment built on ethical practices, long-term partnerships, and meaningful healthcare impact.",
                  },
                  {
                    title: "Team Culture",
                    description:
                      "Collaborate with experienced professionals across operations, sales, and product teams in a culture driven by responsibility and trust.",
                  },
                  {
                    title: "Apply Form",
                    description:
                      "Share your details and experience with us. Our team will review your application and connect with you regarding relevant opportunities.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-sm border border-slate-200 p-6">
                    <h2 className="text-xl font-semibold text-[#0B3C6D]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm tracking-wide text-slate-600">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <form className="grid gap-4 rounded-sm border border-slate-200 p-6 sm:grid-cols-2">
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]"
                placeholder="Full name"
                aria-label="Full name"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]"
                placeholder="Phone number"
                aria-label="Phone number"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]"
                placeholder="Email address"
                aria-label="Email address"
              />
              <input
                className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]"
                placeholder="Role interested in"
                aria-label="Role interested in"
              />
              <textarea
                className="min-h-40 rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D] sm:col-span-2"
                placeholder="Briefly describe your experience"
                aria-label="Experience"
              />
              <button
                type="button"
                className="rounded-sm bg-[#0B3C6D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#082f56] sm:col-span-2">
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
