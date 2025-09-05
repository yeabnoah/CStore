"use client";

import ProductCard from "@/components/product-card";
import productsData from "@/constant/productsData";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchParams = useSearchParams();
	const q = (searchParams.get("q") ?? "").toLowerCase();
	const filtered = q
		? productsData.filter((p) =>
				p.description.toLowerCase().includes(q) ||
				p.category.toLowerCase().includes(q) ||
				p.slug.toLowerCase().includes(q)
		  )
		: productsData;
	return (
		<div className="space-y-8">
			<section className="relative hidden md:block overflow-hidden rounded-2xl border p-8 sm:p-12">
				{/* Decorative background */}
				<div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

				<div className="mx-auto max-w-5xl">
					<div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
						<span className="h-2 w-2 rounded-full bg-primary" /> Trusted packaging partner
					</div>
					<h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
						Packaging that <span className="text-primary">protects</span> and <span className="text-primary">sells</span>
					</h1>
					<p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
						Aluminum, kraft paper, transparent and coffee pouches — food‑safe, durable, and ready for your brand.
					</p>
					<div className="mt-5 flex flex-col items-start gap-3 sm:flex-row">
						<a href="#products" className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium hover:bg-accent">Browse products</a>
						<a href="/contact" className="inline-flex h-10 items-center justify-center rounded-md border px-5 text-sm font-medium hover:bg-accent">Get in touch</a>
					</div>

					{/* Product preview strip */}
					{/* <div className="mt-8 overflow-x-auto">
						<div className="flex items-center gap-4">
							{productsData.slice(0, 8).map((p) => {
								const src = p.urls?.[0];
								if (!src) return null;
								return (
									<div key={p.slug} className="group relative h-24 w-40 shrink-0 overflow-hidden rounded-lg border">
										<Image src={src} alt={p.description} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="160px" />
									</div>
								);
							})}
						</div>
					</div> */}
				</div>
			</section>
			<section id="products">
				{q ? (
					<div className="mb-2 text-sm text-muted-foreground">
						Showing {filtered.length} result{filtered.length === 1 ? "" : "s"} for "{searchParams.get("q")}".
					</div>
				) : null}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filtered.map((p) => (
						<ProductCard key={p.slug} product={p} />
					))}
				</div>
			</section>
		</div>
	);
}
