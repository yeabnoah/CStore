export const metadata = {
    title: "About | my-better-t-app",
};

export default function AboutPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">About Us</h1>
                <p className="text-muted-foreground">
                    We provide high‑quality, ready‑to‑ship packaging solutions designed to protect,
                    preserve, and present your products beautifully. From aluminum stand‑up pouches to
                    coffee bags with valves, we help brands deliver great customer experiences.
                </p>
            </header>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">What We Offer</h2>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="rounded-md border p-4">
                        <p className="font-medium">Aluminum Pouches</p>
                        <p className="text-sm text-muted-foreground">Durable, light‑proof pouches with window & zipper options.</p>
                    </li>
                    <li className="rounded-md border p-4">
                        <p className="font-medium">Kraft Paper Pouches</p>
                        <p className="text-sm text-muted-foreground">Eco‑friendly look with reliable barrier layers and zip seals.</p>
                    </li>
                    <li className="rounded-md border p-4">
                        <p className="font-medium">Coffee Pouches</p>
                        <p className="text-sm text-muted-foreground">3D/quad‑seal options with zipper & degassing valves.</p>
                    </li>
                    <li className="rounded-md border p-4">
                        <p className="font-medium">Transparent Pouches</p>
                        <p className="text-sm text-muted-foreground">Showcase your product with clear, food‑safe materials.</p>
                    </li>
                </ul>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Industries We Serve</h2>
                <p className="text-muted-foreground">
                    Coffee, tea, snacks, dried goods, spices, pet treats, and more.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold">Why Choose Us</h2>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    <li>Consistent quality and food‑grade materials</li>
                    <li>Sizes from 150g to 1kg+ with practical features</li>
                    <li>Clear pricing and fast fulfillment</li>
                </ul>
            </section>

            <section className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold">Need a quote or guidance?</h3>
                <p className="text-muted-foreground">Tell us your product, quantity, and preferred pouch type.</p>
                <a href="/contact" className="mt-3 inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
                    Contact Us
                </a>
            </section>
        </div>
    );
}


