import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("ekantika");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Ekantika"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function EkantikaPage() {
  return <PartnerPage slug="ekantika" />;
}
