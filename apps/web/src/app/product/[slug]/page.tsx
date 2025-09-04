import ImageWithSkeleton from "@/components/image-with-skeleton";
import productsData from "@/constant/productsData";
import type { Product } from "@/lib/types";
import { formatBirr } from "@/lib/utils";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Product | undefined = productsData.find((p) => p.slug === slug);
  if (!product) return notFound();

  const [primaryImage, ...otherImages] = product.urls;

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-4 md:grid-cols-2">
      <div className="space-y-4">
        {primaryImage ? (
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
            <ImageWithSkeleton
              src={primaryImage}
              alt={product.description}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : null}
        {otherImages.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {otherImages.map((url) => (
              <div key={url} className="relative aspect-square overflow-hidden rounded-lg border">
                <ImageWithSkeleton src={url} alt={product.description} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold leading-tight">{product.description}</h1>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-muted px-2 py-0.5">{product.category}</span>
          <span className="text-muted-foreground">#{product.no}</span>
        </div>
        <div className="space-y-1 text-sm">
          <p>
            <span className="text-muted-foreground">Material:</span> {product.material}
          </p>
          <p>
            <span className="text-muted-foreground">Size:</span> {product.size.length} × {product.size.width}
            {product.size.bottom ? ` × ${product.size.bottom}` : ""}
            {product.size.side ? `, side ${product.size.side}` : ""}
          </p>
        </div>
        <p className="text-2xl font-bold">{formatBirr(product.unit_price_birr)}</p>
      </div>
    </div>
  );
}


