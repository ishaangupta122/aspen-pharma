import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductTable } from "@/components/ProductTable";
import { productDivisions } from "@/lib/site-data";

export function getProductDivision(slug: string) {
  return productDivisions.find((item) => item.slug === slug);
}

export function ProductDivisionView({ slug }: { slug: string }) {
  const division = getProductDivision(slug);

  if (!division) {
    notFound();
  }

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
              {division.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {division.description}
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-medium tracking-tight text-[#0B3C6D]">
                Molecule categories, brand highlights, and positioning
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                This table is structured for doctors, distributors, and business
                partners to quickly review Aspen&apos;s portfolio direction.
              </p>
            </div>
            <ProductTable rows={division.rows} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
