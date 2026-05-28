import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QualityProcessSection } from "@/app/quality/QualityProcessSection";
import HomeBanner from "@/components/HomeBanner";
import CertificationsSection from "./CertificationsSection";

export const metadata: Metadata = {
  title: "Quality Assurance | Aspen Pharmaceuticals Pvt. Ltd.",
  description:
    "Explore Aspen Pharmaceuticals quality assurance systems, including quality control, raw material testing, stability testing, batch monitoring, SOP systems, and certifications.",
};

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HomeBanner
          eyebrow="Quality Assurance"
          title="Quality systems designed for reliable pharmaceutical outcomes."
          description=" Aspen Pharmaceuticals focuses on disciplined quality assurance
                through partner selection, quality-controlled production
                systems, documented procedures, and dependable batch oversight."
        />

        <QualityProcessSection />

        <CertificationsSection />
      </main>
      <Footer />
    </>
  );
}
