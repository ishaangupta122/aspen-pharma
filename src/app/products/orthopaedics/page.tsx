import type { Metadata } from "next";
import { ProductDivisionView, getProductDivision } from "../ProductDivisionView";

const division = getProductDivision("orthopaedics");

export const metadata: Metadata = {
  title: `${division?.title ?? "Orthopaedics"} Products | Aspen Pharmaceuticals Pvt. Ltd.`,
  description: division?.description,
};

export default function OrthopaedicsProductsPage() {
  return <ProductDivisionView slug="orthopaedics" />;
}
