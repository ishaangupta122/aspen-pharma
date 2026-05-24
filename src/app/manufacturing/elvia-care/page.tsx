import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("elvia-care");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Elvia Care"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function ElviaCarePage() {
  return <PartnerPage slug="elvia-care" />;
}
