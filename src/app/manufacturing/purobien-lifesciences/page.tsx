import type { Metadata } from "next";
import { getManufacturingPartner, PartnerPage } from "../PartnerPage";

const partner = getManufacturingPartner("purobien-lifesciences");

export const metadata: Metadata = {
  title: `${partner?.name ?? "Purobien Lifesciences"} | Manufacturing Partner`,
  description: partner?.intro,
};

export default function PurobienPage() {
  return <PartnerPage slug="purobien-lifesciences" />;
}
