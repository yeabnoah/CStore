"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import productsData from "@/constant/productsData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Route } from "next";

export default function Header() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/categories", label: "Categories" },
		{ to: "/about", label: "About" },
		{ to: "/contact", label: "Contact" },
	] as const;
	const [menuOpen, setMenuOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const q = searchParams.get("q") ?? "";
		setQuery(q);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	const results = query
		? productsData
			.filter((p) => {
				const q = query.toLowerCase();
				return (
					p.description.toLowerCase().includes(q) ||
					p.category.toLowerCase().includes(q) ||
					p.slug.toLowerCase().includes(q)
				);
			})
			.slice(0, 8)
		: [];

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
						<div className="w-full max-w-xl relative">
							<Input
								placeholder="Search packaging…"
								className="h-10 rounded-full"
								value={query}
								onChange={(e) => {
									const v = e.target.value;
									setQuery(v);
									const url = (v ? `${pathname}?q=${encodeURIComponent(v)}` : pathname) as Route;
									router.replace(url);
								}}
								onFocus={() => setIsFocused(true)}
								onBlur={() => setTimeout(() => setIsFocused(false), 100)}
								onKeyDown={(e) => {
									if (e.key === "Enter" && results.length > 0) {
										router.push(`/product/${results[0].slug}`);
										setQuery("");
									}
								}}
							/>
							{isFocused && query && results.length > 0 ? (
								<ul className="absolute z-50 mt-2 w-full max-h-80 overflow-auto rounded-md border bg-background p-1 shadow">
									{results.map((p) => (
										<li key={p.slug}>
											<Link
												href={`/product/${p.slug}`}
												className="flex items-start gap-2 rounded px-3 py-2 text-sm hover:bg-accent"
												onClick={() => setQuery("")}
											>
												<span className="font-medium">{p.description}</span>
												<span className="ml-auto text-xs opacity-70">{p.category}</span>
											</Link>
										</li>
									))}
								</ul>
							) : null}
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
						<ModeToggle />
					</div>
				</div>

				{/* Mobile search */}
				<div className="py-2 md:hidden relative">
					<Input
						placeholder="Search packaging…"
						className="h-10 rounded-full"
						value={query}
						onChange={(e) => {
							const v = e.target.value;
							setQuery(v);
							const url = (v ? `${pathname}?q=${encodeURIComponent(v)}` : pathname) as Route;
							router.replace(url);
						}}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setTimeout(() => setIsFocused(false), 100)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && results.length > 0) {
								router.push(`/product/${results[0].slug}`);
								setQuery("");
							}
						}}
					/>
					{isFocused && query && results.length > 0 ? (
						<ul className="absolute z-50 mt-2 w-full max-h-80 overflow-auto rounded-md border bg-background p-1 shadow">
							{results.map((p) => (
								<li key={p.slug}>
									<Link
										href={`/product/${p.slug}`}
										className="flex items-start gap-2 rounded px-3 py-2 text-sm hover:bg-accent"
										onClick={() => setQuery("")}
									>
										<span className="font-medium">{p.description}</span>
										<span className="ml-auto text-xs opacity-70">{p.category}</span>
									</Link>
								</li>
							))}
						</ul>
					) : null}
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
