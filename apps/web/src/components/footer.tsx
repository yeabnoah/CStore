export default function Footer() {
	return (
		<footer className="border-t mt-8">
			<div className="mx-auto max-w-6xl px-3 py-8 text-sm text-muted-foreground">
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<p>
						<strong>Bini Packaging</strong> — Quality packaging solutions
					</p>
					<nav className="flex gap-4">
						<a href="https://t.me/binipackaging" aria-label="Telegram">
							Telegram
						</a>
						<a href="https://www.tiktok.com/@bini.package?_t=ZM-8zTBLwtV9vS&_r=1" aria-label="TikTok">
							TikTok
						</a>
						<a href="/contact" aria-label="Contact">
							Contact
						</a>
					</nav>
				</div>
				<p className="mt-4">All prices exclude tax.</p>
				<p className="mt-1">© {new Date().getFullYear()} Bini Packaging. All rights reserved.</p>
			</div>
		</footer>
	);
}


