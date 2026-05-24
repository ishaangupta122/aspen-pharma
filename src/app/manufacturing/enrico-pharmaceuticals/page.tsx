import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("enrico-pharmaceuticals");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Enrico Pharmaceuticals"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function EnricoPage() {
  return <PartnerPage slug="enrico-pharmaceuticals" />;
}
