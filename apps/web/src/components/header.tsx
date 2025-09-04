"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Header() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/categories", label: "Categories" },
		{ to: "/about", label: "About" },
		{ to: "/contact", label: "Contact" },
	] as const;
	const [menuOpen, setMenuOpen] = useState(false);

	// Lock body scroll when sidebar is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "";
			};
		}
		document.body.style.overflow = "";
	}, [menuOpen]);

	return (
		<header className="sticky top-0 pt-3 z-40 w-full border-b bg-background/80 backdrop-blur">
			<div className="mx-auto max-w-6xl px-3">
				<div className="flex h-14 items-center justify-between gap-3">
					<div className="flex items-center gap-3">
						<button
							className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border"
							onClick={() => setMenuOpen((v) => !v)}
							aria-label="Toggle menu"
							aria-expanded={menuOpen}
						>
							<span className="relative block h-4 w-5">
								<span className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`}></span>
								<span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
								<span className={`absolute left-0 top-3 h-0.5 w-5 bg-foreground transition-transform duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}></span>
							</span>
						</button>
						<Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
							<span className="sr-only">Bini Packaging</span>
							<Image src="/logo.png"  alt="Bini Packaging logo" width={28} height={28} priority className="h-7 w-7 rounded bg-white object-contain" />
							<span className="leading-none">Bini Packaging</span>
						</Link>
					</div>

					<div className="hidden md:flex flex-1 items-center justify-center">
						<div className="w-full max-w-xl">
							<Input
								placeholder="Search packaging…"
								className="h-10 rounded-full"
							/>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<nav className="hidden md:flex items-center gap-5 text-sm">
							{links.map(({ to, label }) => (
								<Link key={to} href={to} className="hover:underline">
									{label}
								</Link>
							))}
						</nav>
						<button className="inline-flex h-9 w-9 items-center justify-center rounded-md border" aria-label="Cart">
							<span>🛒</span>
						</button>
						<ModeToggle />
					</div>
				</div>

				{/* Mobile search */}
				<div className="py-2 md:hidden">
					<Input placeholder="Search packaging…" className="h-10 rounded-full" />
				</div>

				{/* Mobile sidebar + overlay */}
				{menuOpen ? (
					<>
						<div
							className="fixed inset-0 z-[100] h-screen  bg-background w-[80%] md:hidden"
							onClick={() => setMenuOpen(false)}
							aria-hidden
						/>
						<aside
							className={`fixed inset-y-0 left-0 z-[110] w-72 transform rounded-r-2xl border-r bg-background p-5 shadow-xl transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
							role="dialog"
							aria-modal="true"
						>
							<div className="mb-4 flex items-center justify-between">
								<Link href="/" className="inline-flex items-center gap-2" onClick={() => setMenuOpen(false)}>
									<Image src="/logo.png" alt="Bini Packaging" width={28} height={28} className="rounded" />
									<span className="text-sm font-semibold">Bini Packaging</span>
								</Link>
								<button
									className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
									onClick={() => setMenuOpen(false)}
									aria-label="Close menu"
								>
									×
								</button>
							</div>
							<nav className="flex flex-col gap-1">
								{links.map(({ to, label }) => (
									<Link
										key={to}
										href={to}
										className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
										onClick={() => setMenuOpen(false)}
									>
										{label}
									</Link>
								))}
							</nav>
						</aside>
					</>
				) : null}
			</div>
		</header>
	);
}
