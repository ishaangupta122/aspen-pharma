import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

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
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Careers
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl">
                Build meaningful pharmaceutical careers with Aspen.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Join a company shaped by field experience, ethical practices,
                and a practical commitment to healthcare partnerships.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Why join Aspen", "Team culture", "Apply form"].map((item) => (
                <article key={item} className="rounded-sm border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-medium text-[#0B3C6D]">{item}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    A professional environment for responsible, relationship-led
                    pharmaceutical work.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Apply
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D]">
                Share your profile.
              </h2>
            </div>
            <form className="grid gap-4 rounded-sm border border-slate-200 p-6 sm:grid-cols-2">
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Full name" aria-label="Full name" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Phone number" aria-label="Phone number" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Email address" aria-label="Email address" />
              <input className="rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D]" placeholder="Role interested in" aria-label="Role interested in" />
              <textarea className="min-h-32 rounded-sm border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0F8B8D] sm:col-span-2" placeholder="Briefly describe your experience" aria-label="Experience" />
              <button type="button" className="rounded-sm bg-[#0B3C6D] px-6 py-4 text-sm font-semibold text-white hover:bg-[#082f56] sm:col-span-2">
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
