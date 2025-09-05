import { Suspense } from "react";
import HomeContent from "./sections/HomeContent";

export default function Home() {
	return (
		<Suspense fallback={null}>
			<HomeContent />
		</Suspense>
	);
}
