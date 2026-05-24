import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("medicef-pharma");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Medicef Pharma"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function MedicefPage() {
  return <PartnerPage slug="medicef-pharma" />;
}
