import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("lifevision-healthcare");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Lifevision Healthcare"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function LifevisionPage() {
  return <PartnerPage slug="lifevision-healthcare" />;
}
