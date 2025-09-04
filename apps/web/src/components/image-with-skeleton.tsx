"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
	src: string;
	alt: string;
	sizes?: string;
	className?: string;
};

export default function ImageWithSkeleton({ src, alt, sizes, className }: Props) {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			<Skeleton className={cn("absolute inset-0", loaded ? "opacity-0" : "opacity-100")} />
			<Image
				src={src}
				alt={alt}
				fill
				className={cn("object-cover transition-opacity duration-300", loaded ? "opacity-100" : "opacity-0", className)}
				sizes={sizes}
				onLoadingComplete={() => setLoaded(true)}
			/>
		</>
	);
}


