export type ProductCategory =
  | "Aluminum Pouches"
  | "Kraft Paper Pouches"
  | "Coffee Pouches"
  | "Transparent Pouches";

export type ProductSize = {
  length: string;
  width: string;
  bottom?: string;
  side?: string;
};

export type Product = {
  no: number;
  description: string;
  size: ProductSize;
  material: string;
  unit_price_birr: number;
  slug: string;
  category: ProductCategory;
  urls: string[];
};
