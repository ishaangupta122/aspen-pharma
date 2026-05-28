import { SectionHeader } from "./SectionHeader";

export const qualityPillars = [
  {
    title: "Responsible Quality Assurance",
    description:
      "We verify every batch through validated protocols, in-process checks, and final release testing to protect patient safety.",
  },
  {
    title: "Ethical Manufacturing Practices",
    description:
      "Our teams follow transparent documentation, GMP-aligned workflows, and supplier accountability across the supply chain.",
  },
  {
    title: "Patient-First Reliability",
    description:
      "Stability, storage, and distribution controls ensure every product performs consistently from plant to pharmacy.",
  },
];

export default function QualityCommitmentSection() {
  return (
    <section id="quality" className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        {/* Main Section Grid */}
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Header Panel */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Quality Commitment"
              title="Our responsibility to patients and partners."
              description="Quality is a responsibility we carry end-to-end, from raw material qualification to batch release, distribution, and post-market assurance."
            />
          </div>

          {/* Right Column: Clean Progression Timeline */}
          <div className="lg:col-span-7 space-y-0 relative before:absolute before:left-4 sm:before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-slate-200">
            {qualityPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="relative pl-12 sm:pl-16 pb-12 last:pb-0">
                {/* Clean Teal Step Marker */}
                <div className="absolute left-0 top-0.5 grid size-9 sm:size-12 place-items-center rounded-full bg-[#0F8B8D] text-xs font-bold tracking-wider text-white shadow-sm">
                  0{index + 1}
                </div>

                {/* Content Container */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0B3C6D]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600 max-w-2xl">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
