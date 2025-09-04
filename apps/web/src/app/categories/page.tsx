import productsData from "@/constant/productsData";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "Categories | my-better-t-app",
};

export default function CategoriesPage() {
    const categoryMap = new Map<string, { name: string; image?: string }>();
    for (const p of productsData) {
        if (!categoryMap.has(p.category)) {
            categoryMap.set(p.category, { name: p.category, image: p.urls?.[0] });
        }
    }
    const categories = Array.from(categoryMap.values());

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">Categories</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((c) => (
                    <Link key={c.name} href="/categories" className="block">
                        <Card className="overflow-hidden transition hover:shadow-md">
                            {c.image ? (
                                <div className="relative h-40 w-full">
                                    <Image
                                        src={c.image}
                                        alt={c.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            ) : null}
                            <CardHeader>
                                <CardTitle>{c.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">Explore {c.name} products</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}


