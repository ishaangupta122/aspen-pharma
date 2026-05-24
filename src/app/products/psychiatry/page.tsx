import type { Metadata } from "next";
import { ProductDivisionView, getProductDivision } from "../ProductDivisionView";

const division = getProductDivision("psychiatry");

export const metadata: Metadata = {
  title: `${division?.title ?? "Psychiatry"} Products | Aspen Pharmaceuticals Pvt. Ltd.`,
  description: division?.description,
};

export default function PsychiatryProductsPage() {
  return <ProductDivisionView slug="psychiatry" />;
}
