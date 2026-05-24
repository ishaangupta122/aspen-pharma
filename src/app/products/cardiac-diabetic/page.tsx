import type { Metadata } from "next";
import { ProductDivisionView, getProductDivision } from "../ProductDivisionView";

const division = getProductDivision("cardiac-diabetic");

export const metadata: Metadata = {
  title: `${division?.title ?? "Cardiac & Diabetic"} Products | Aspen Pharmaceuticals Pvt. Ltd.`,
  description: division?.description,
};

export default function CardiacDiabeticProductsPage() {
  return <ProductDivisionView slug="cardiac-diabetic" />;
}
