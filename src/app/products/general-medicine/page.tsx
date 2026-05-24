import type { Metadata } from "next";
import { ProductDivisionView, getProductDivision } from "../ProductDivisionView";

const division = getProductDivision("general-medicine");

export const metadata: Metadata = {
  title: `${division?.title ?? "General Medicine"} Products | Aspen Pharmaceuticals Pvt. Ltd.`,
  description: division?.description,
};

export default function GeneralMedicineProductsPage() {
  return <ProductDivisionView slug="general-medicine" />;
}
