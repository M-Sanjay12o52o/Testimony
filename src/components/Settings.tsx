import Link from 'next/link';

export const SettingsPage = () => (
    <div className="min-h-screen bg-purple-900 text-white p-8">
        <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="bg-black p-4 rounded">
            <h3 className="text-xl font-bold mb-2">Profile Settings</h3>
            <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-2 rounded text-black" />
                <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" />
                <button type="submit" className="bg-purple-600 p-2 rounded">Save Changes</button>
            </form>
        </div>
    </div>
);