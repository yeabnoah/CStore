import type { Product } from "@/lib/types";
import { formatBirr } from "@/lib/utils";
import Link from "next/link";
import ImageWithSkeleton from "@/components/image-with-skeleton";

type Props = { product: Product }; 

export default function ProductCard({ product }: Props) {
	const imageUrl = product.urls[0];
	return (
		<Link
			href={`/product/${product.slug}`}
			className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition hover:shadow-md"
		>
			<div className="relative aspect-square w-full overflow-hidden">
				<ImageWithSkeleton
					src={imageUrl}
					alt={product.description}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
					className="transition-transform duration-500 group-hover:scale-105"
				/>
			</div>
			<div className="p-3">
				<div className="flex items-start justify-between gap-2">
					<p className="line-clamp-2 text-sm font-medium">
						{product.description}
					</p>
					<span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs">
						{product.category}
					</span>
				</div>
				<p className="mt-2 text-base font-semibold">{formatBirr(product.unit_price_birr)}</p>
			</div>
		</Link>
	);
}


