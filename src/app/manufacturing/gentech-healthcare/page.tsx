import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("gentech-healthcare");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Gentech Healthcare"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function GentechPage() {
  return <PartnerPage slug="gentech-healthcare" />;
}
