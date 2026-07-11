import Link from "next/link";
export default function NotFound() { return <main className="not-found"><span>404 / PAGE NOT FOUND</span><h1>We couldn’t find that page.</h1><p>The address may be incorrect or the page may have moved.</p><Link href="/" className="button">Return home</Link></main>; }
