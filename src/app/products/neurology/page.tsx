import type { Metadata } from "next";
import { ProductDivisionView, getProductDivision } from "../ProductDivisionView";

const division = getProductDivision("neurology");

export const metadata: Metadata = {
  title: `${division?.title ?? "Neurology"} Products | Aspen Pharmaceuticals Pvt. Ltd.`,
  description: division?.description,
};

export default function NeurologyProductsPage() {
  return <ProductDivisionView slug="neurology" />;
}
