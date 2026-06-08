import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import HomeBanner from "@/components/HomeBanner";
import { ProductDivisionTabs } from "./ProductDivisionTabs";

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
          eyebrow="Products"
          title="Our Therapeutic Areas."
          description="Explore Aspen Pharmaceuticals product divisions across Neurology, Psychiatry, Orthopaedics, Cardiac & Diabetic Care, and General Medicine."
        />

        <section className="bg-white" id="product-tables">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <Suspense fallback={null}>
              <ProductDivisionTabs />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
