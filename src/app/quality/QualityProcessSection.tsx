import Image from "next/image";
import { SectionHeader } from "../../components/SectionHeader";

const qualityProcess = [
  {
    number: "01",
    title: "Raw Material Testing",
    description:
      "Every raw material is verified through defined quality checks before entering production, ensuring consistency from the very beginning of the manufacturing process.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Laboratory technician reviewing raw materials",
  },
  {
    number: "02",
    title: "Stability Testing",
    description:
      "Stability testing helps us monitor product performance over time under controlled conditions to maintain quality, safety, and shelf-life standards.",
    imageSrc:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Pharmaceutical stability testing in a lab",
  },
  {
    number: "03",
    title: "Batch Monitoring",
    description:
      "Manufacturing batches are monitored through controlled procedures and documented review systems to ensure reliable and repeatable product quality.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092161562-1f028f7f7c5a?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Production line monitoring in a facility",
  },
];

export function QualityProcessSection() {
  return (
    <section id="quality-process" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeader
          eyebrow="Quality Commitment"
          title="Quality Built Into Every Stage"
          description="Our quality systems are integrated across sourcing, testing, manufacturing, and release to ensure consistency, compliance, and dependable pharmaceutical outcomes."
        />

        <div className="mt-12 space-y-12">
          {qualityProcess.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <article
                key={item.title}
                className={
                  "grid gap-8 lg:items-center lg:grid-cols-[1.05fr_0.95fr] " +
                  (isReversed ? "lg:[&>div:first-child]:order-2" : "")
                }>
                <div className="relative overflow-hidden rounded-sm">
                  <div className="relative h-64 w-full sm:h-72 lg:h-80">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0F8B8D]">
                    {item.number}
                  </p>
                  <h3 className="text-4xl font-semibold text-[#0B3C6D]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-6 text-slate-600 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
