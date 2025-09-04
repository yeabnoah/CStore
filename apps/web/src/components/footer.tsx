export default function Footer() {
	return (
		<footer className="border-t mt-8">
			<div className="mx-auto max-w-6xl px-3 py-8 text-sm text-muted-foreground">
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<p>
						<strong>Bini Packaging</strong> — Quality packaging solutions
					</p>
					<nav className="flex gap-4">
						<a href="#" aria-label="Twitter">
							Twitter
						</a>
						<a href="#" aria-label="Instagram">
							Instagram
						</a>
						<a href="#" aria-label="Contact">
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


