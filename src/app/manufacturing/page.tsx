import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { manufacturingPartnerDetails } from "@/lib/site-data";
import HomeBanner from "@/components/HomeBanner";

const factoryImages = [
  {
    src: "https://images.unsplash.com/photo-1581091870627-3afcaa1f57e3?auto=format&fit=crop&q=80&w=1200",
    alt: "Tablet production line in a pharmaceutical facility",
    label: "Formulation & Blending",
  },
  {
    src: "https://images.unsplash.com/photo-1581092160594-9b07b3d62e93?auto=format&fit=crop&q=80&w=1200",
    alt: "Quality control lab with technicians analyzing samples",
    label: "Quality Control Labs",
  },
  {
    src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
    alt: "Packaging and labeling line in a GMP facility",
    label: "Packaging & Dispatch",
  },
  {
    src: "https://images.unsplash.com/photo-1581092161562-1f028f7f7c5a?auto=format&fit=crop&q=80&w=1200",
    alt: "Sterile production area with monitoring equipment",
    label: "Sterile Manufacturing",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200",
    alt: "Warehouse storage with organized pallets",
    label: "Warehouse & Logistics",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    alt: "Technician reviewing pharmaceutical samples",
    label: "Analytical Testing",
  },
];

export const metadata: Metadata = {
  title: "Manufacturing Facilities | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Aspen Pharmaceuticals collaborates with leading WHO-GMP certified pharmaceutical manufacturers across India for quality, consistency, safety, and innovation.",
};

export default function ManufacturingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HomeBanner
          eyebrow="Manufacturing"
          title="Manufacturing Facilities"
          description=" Aspen Pharmaceuticals Pvt. Ltd. collaborates with leading
                WHO-GMP certified pharmaceutical manufacturers across India to
                ensure high standards of quality, consistency, safety, and
                innovation."
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Facility Snapshot
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Inside Aspen&apos;s manufacturing network.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A glimpse into formulation, quality assurance, and packaging
                environments across our partner facilities.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {factoryImages.map((image) => (
                <div
                  key={image.label}
                  className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-72 w-full sm:h-80 lg:h-96">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-4 text-sm font-semibold text-[#0B3C6D]">
                    {image.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                Manufacturing Partners
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#0B3C6D] sm:text-4xl">
                Partner facilities supporting Aspen&apos;s quality promise.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {manufacturingPartnerDetails.map((partner, index) => (
                <div
                  key={partner.slug}
                  className="rounded-sm border border-slate-200 p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F8B8D]">
                        {(index + 1).toString().padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 text-2xl font-medium text-[#0B3C6D]">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-slate-600">
                    {partner.intro}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {partner.focus.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-sm bg-[#F5F7FA] px-3 py-2 text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
