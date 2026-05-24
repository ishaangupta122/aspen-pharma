import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductTable } from "@/components/ProductTable";
import { productDivisions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Product Divisions | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Explore Aspen Pharmaceuticals product divisions across Neurology, Psychiatry, Orthopaedics, Cardiac & Diabetic Care, and General Medicine.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-[#F5F7FA]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
              Product Division
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-[#0B3C6D] sm:text-5xl lg:text-6xl">
              Focused therapeutic divisions for doctors and healthcare partners.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Each division presents molecule categories, brand highlights, and
              scientific positioning in a clear table format for practical
              review.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-4 lg:grid-cols-5">
              {productDivisions.map((division) => (
                <Link
                  key={division.slug}
                  href={`/products/${division.slug}`}
                  className="rounded-sm border border-slate-200 p-5 transition-colors hover:border-[#0F8B8D]/60"
                >
                  <h2 className="text-lg font-medium text-[#0B3C6D]">{division.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">View table</p>
                </Link>
              ))}
            </div>

            <div className="mt-14 space-y-14">
              {productDivisions.map((division) => (
                <article key={division.slug} id={division.slug}>
                  <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                        Division
                      </p>
                      <h2 className="mt-3 text-3xl font-medium text-[#0B3C6D]">
                        {division.title}
                      </h2>
                    </div>
                    <Link
                      href={`/products/${division.slug}`}
                      className="text-sm font-semibold text-[#0F8B8D]"
                    >
                      Open division page
                    </Link>
                  </div>
                  <ProductTable rows={division.rows} />
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
