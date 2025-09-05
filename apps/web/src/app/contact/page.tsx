export const metadata = {
    title: "Contact | Bini Packaging",
};

export default function ContactPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">Get in touch with Bini Packaging</h1>
                <p className="text-muted-foreground">For quotes, bulk orders, or product guidance, our team responds within one business day.</p>
            </header>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border p-5">
                    <h2 className="text-lg font-semibold">Talk to sales</h2>
                    <div className="mt-3 space-y-2 text-sm">
                        <a className="inline-flex items-center justify-center rounded-md border px-3 py-2 hover:bg-accent" href="tel:+251952335228" aria-label="Call sales">
                            +251 952 335 228
                        </a>
                        <div>
                            <a className="inline-flex items-center justify-center rounded-md border px-3 py-2 hover:bg-accent" href="https://wa.me/251952335228" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp chat">
                                WhatsApp chat
                            </a>
                        </div>
                        <div>
                            <a className="inline-flex items-center justify-center rounded-md border px-3 py-2 hover:bg-accent" href="mailto:sales@binipackaging.com?subject=Quote%20request&body=Please%20include%20product%2C%20quantity%2C%20and%20pouch%20type.">
                                sales@binipackaging.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border p-5">
                    <h2 className="text-lg font-semibold">Social</h2>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li>
                            <a className="inline-flex items-center justify-start rounded-md border px-3 py-2 hover:bg-accent" href="https://t.me/binipackaging" target="_blank" rel="noopener noreferrer">Telegram @binipackaging</a>
                        </li>
                        <li>
                            <a className="inline-flex items-center justify-start rounded-md border px-3 py-2 hover:bg-accent" href="https://www.tiktok.com/@bini.package?_t=ZM-8zTBLwtV9vS&_r=1" target="_blank" rel="noopener noreferrer">TikTok @bini.package</a>
                        </li>
                    </ul>
                </div>

                <div className="rounded-xl border p-5">
                    <h2 className="text-lg font-semibold">Business details</h2>
                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                        <p>
                            <span className="font-medium text-foreground">Hours:</span> 2:00 – 1:00
                        </p>
                        <p>
                            <span className="font-medium text-foreground">Address:</span> Addis Ababa, Ethiopia — Kality
                        </p>
                    </div>
                </div>
            </section>

            <section className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold">Prefer email?</h3>
                <p className="text-muted-foreground">Include your product, quantity, and preferred pouch type to help us tailor a quote.</p>
                <a href="mailto:sales@binipackaging.com?subject=Quote%20request&body=Product%3A%20%0AQuantity%3A%20%0APouch%20type%3A%20" className="mt-3 inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
                    Start an email
                </a>
            </section>
        </div>
    );
}


