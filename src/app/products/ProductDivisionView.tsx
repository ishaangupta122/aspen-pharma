import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProductTable } from "@/components/ProductTable";
import { productDivisions } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";

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
        <HomeBanner
          eyebrow="Product Division"
          title={division.title}
          description={division.description}
        />

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
