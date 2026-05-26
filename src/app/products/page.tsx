import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductTable } from "@/components/ProductTable";
import { productDivisions } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";
import { ExternalLink } from "lucide-react";

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
        <HomeBanner
          eyebrow="Product Divisions"
          title="Focused therapeutic divisions for doctors and healthcare partners."
          description="Each division presents molecule categories, brand highlights, and scientific positioning in a clear table format for practical review."
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-4 lg:grid-cols-5">
              {productDivisions.map((division) => (
                <Link
                  key={division.slug}
                  href={`/products/${division.slug}`}
                  className="rounded-sm text-center border border-[#0F8B8D] p-5 transition-colors hover:underline text-[#0F8B8D]">
                  <h2 className="text-lg font-medium text-[#0F8B8D]">
                    {division.title}
                    <ExternalLink className="ml-1 inline-block" size={16} />
                  </h2>
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
                      className="text-sm font-semibold text-[#0F8B8D]">
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
