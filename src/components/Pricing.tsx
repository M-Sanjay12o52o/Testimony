import Link from "next/link";

export const PricingPage = () => (
    <div className="min-h-screen bg-purple-900 text-white p-8">
        <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                <div key={plan} className="bg-black p-4 rounded">
                    <h3 className="text-xl font-bold mb-2">{plan}</h3>
                    <p className="mb-4">Plan description goes here</p>
                    <button className="bg-purple-600 p-2 rounded w-full">Choose Plan</button>
                </div>
            ))}
        </div>
    </div>
);