import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("akums-drugs-pharmaceuticals");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Akums"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function AkumsPage() {
  return <PartnerPage slug="akums-drugs-pharmaceuticals" />;
}
