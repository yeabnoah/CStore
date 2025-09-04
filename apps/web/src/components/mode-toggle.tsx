"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	function toggle() {
		setTheme(isDark ? "light" : "dark");
	}

	return (
		<button
			type="button"
			aria-label="Toggle dark mode"
			aria-pressed={isDark}
			onClick={toggle}
			className="inline-flex items-center rounded-full border bg-background px-1 py-1 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
		>
			<span className="relative flex h-6 w-11 items-center">
				{/* Track */}
				<span className="absolute inset-0 rounded-full bg-muted" />
				{/* Thumb */}
				<span
					className={`relative z-10 inline-flex h-5 w-5 translate-x-0 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-0"}`}
				>
					<Sun className={`h-3.5 w-3.5 text-foreground transition-opacity ${isDark ? "opacity-0" : "opacity-100"}`} />
					<Moon className={`absolute h-3.5 w-3.5 text-foreground transition-opacity ${isDark ? "opacity-100" : "opacity-0"}`} />
				</span>
			</span>
		</button>
	);
}
