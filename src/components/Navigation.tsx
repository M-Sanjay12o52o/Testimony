import Link from "next/link";

export const Navigation = () => (
    <nav className="bg-black text-white p-4">
        <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
        <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/settings">Settings</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
        </ul>
    </nav>
);