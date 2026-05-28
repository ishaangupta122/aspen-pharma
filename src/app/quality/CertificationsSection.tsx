import Image from "next/image";
import { Award, ShieldCheck, FileCheck, Landmark } from "lucide-react";
import { certificationItems } from "@/lib/site-data";
import { SectionHeader } from "@/components/SectionHeader";

const iconMap = {
  who: Landmark,
  iso: ShieldCheck,
  glp: FileCheck,
  gmp: Award,
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <SectionHeader
          eyebrow="Certifications"
          title="Quality assurance standards and systems."
          description="Aspen's manufacturing ecosystem is presented through recognized pharmaceutical quality references and disciplined compliance practices."
          align="center"
        />

        {/* Certifications Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificationItems.map((item) => {
            const IconComponent =
              iconMap[item.iconName as keyof typeof iconMap] || Award;
            const hasLogo = Boolean(item.logo);

            return (
              <div
                key={item.title}
                className="group flex flex-col items-center rounded-sm border bg-white p-8 text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition-all duration-300 ease-in-out border-[#0B3C6D]/20">
                {/* Icon / Logo Wrapper */}
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-sm bg-[#EAF4F4] text-[#0F8B8D] transition-all duration-300 ease-in-out overflow-hidden">
                  {hasLogo ? (
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <IconComponent className="h-6 w-6 stroke-[1.8]" />
                  )}
                </div>

                {/* Certification Title */}
                <h3 className="text-2xl font-semibold tracking-tight transition-colors text-[#0B3C6D]">
                  {item.title}
                </h3>

                {/* Certification Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                {/* Subtle Verification Link */}
                {/* <span className="mt-5 inline-flex items-center text-xs font-semibold text-[#0F8B8D] duration-300">
                  Verify Framework &rarr;
                </span> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
