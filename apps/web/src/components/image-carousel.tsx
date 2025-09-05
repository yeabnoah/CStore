"use client";
import { useState, useMemo, useCallback } from "react";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  images: string[];
  alt: string;
};

export default function ImageCarousel({ images, alt }: Props) {
  const validImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  const showNext = useCallback(() => {
    if (validImages.length === 0) return;
    setIndex((prev) => (prev + 1) % validImages.length);
  }, [validImages.length]);

  const showPrev = useCallback(() => {
    if (validImages.length === 0) return;
    setIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  }, [validImages.length]);

  if (validImages.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
        <ImageWithSkeleton src={validImages[index]} alt={alt} sizes="(max-width: 768px) 100vw, 50vw" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
          <button
            type="button"
            onClick={showPrev}
            className="pointer-events-auto rounded-full bg-black/50 px-3 py-1 text-white hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="pointer-events-auto rounded-full bg-black/50 px-3 py-1 text-white hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {validImages.length > 1 ? (
        <div className="grid grid-cols-4 gap-2">
          {validImages.map((url, i) => (
            <button
              key={url}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative aspect-square overflow-hidden rounded-lg border ${i === index ? "ring-2 ring-primary" : ""}`}
              aria-label={`Show image ${i + 1}`}
            >
              <ImageWithSkeleton src={url} alt={alt} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}


