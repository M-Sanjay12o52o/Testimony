import Link from 'next/link'
import React from 'react'
import { Check, Star, ChevronDown } from 'lucide-react';

type Props = {}

export default function Landing({ }: Props) {
    return (
        <div className="bg-purple-900 text-white">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <h1 className="text-5xl font-bold mb-4">Create Powerful Testimonials</h1>
                <p className="text-xl mb-8">Boost your credibility and convert more customers</p>
                <img src="/api/placeholder/800/400" alt="Testimonials Dashboard" className="mx-auto rounded-lg shadow-lg mb-8" />
                <Link href="/signup" className="bg-white text-purple-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300">
                    Get Started Free
                </Link>
            </section>

            {/* Value Proposition */}
            <section className="bg-black py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Why Choose Our Testimonial Platform?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                            <p>Create and manage testimonials with just a few clicks</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                            <p>Tailor the look and feel to match your brand</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Boost Conversions</h3>
                            <p>Leverage social proof to increase your sales</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h2>
                    <div className="flex justify-center space-x-8 mb-8">
                        <img src="/api/placeholder/120/60" alt="Company Logo 1" className="h-12" />
                        <img src="/api/placeholder/120/60" alt="Company Logo 2" className="h-12" />
                        <img src="/api/placeholder/120/60" alt="Company Logo 3" className="h-12" />
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <blockquote className="text-xl italic">
                            "This platform has revolutionized how we collect and display customer testimonials. It's been a game-changer for our business."
                        </blockquote>
                        <p className="mt-4 font-semibold">- Jane Doe, CEO of TechCorp</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-purple-800 py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Our Platform</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start">
                            <Check className="mr-4 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Increase Credibility</h3>
                                <p>Showcase real customer experiences to build trust with potential clients</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Check className="mr-4 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Improve SEO</h3>
                                <p>User-generated content helps boost your search engine rankings</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Check className="mr-4 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                                <p>Seamlessly add testimonials to your website with our widgets</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Check className="mr-4 text-green-400 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                                <p>Track the impact of your testimonials with detailed insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Powerful Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <Star className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
                            <p>Choose from a variety of layouts to showcase your testimonials</p>
                        </div>
                        <div>
                            <Star className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Multi-platform Support</h3>
                            <p>Collect testimonials via email, social media, or your website</p>
                        </div>
                        <div>
                            <Star className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Advanced Filtering</h3>
                            <p>Categorize and display testimonials based on products or services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-black py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-purple-800 p-4 rounded-lg">
                            <summary className="font-semibold cursor-pointer flex justify-between items-center">
                                How do I get started? <ChevronDown />
                            </summary>
                            <p className="mt-2">Sign up for a free account and follow our easy setup guide to start collecting testimonials.</p>
                        </details>
                        <details className="bg-purple-800 p-4 rounded-lg">
                            <summary className="font-semibold cursor-pointer flex justify-between items-center">
                                Is there a free plan available? <ChevronDown />
                            </summary>
                            <p className="mt-2">Yes, we offer a free plan with basic features. You can upgrade anytime for more advanced capabilities.</p>
                        </details>
                        <details className="bg-purple-800 p-4 rounded-lg">
                            <summary className="font-semibold cursor-pointer flex justify-between items-center">
                                Can I customize the look of my testimonials? <ChevronDown />
                            </summary>
                            <p className="mt-2">Absolutely! Our platform offers extensive customization options to match your brand's look and feel.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Credibility?</h2>
                <p className="text-xl mb-8">Join thousands of satisfied customers and start collecting powerful testimonials today.</p>
                <Link href="/signup" className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300">
                    Start Your Free Trial
                </Link>
            </section>

            {/* Footer */}
            <footer className="bg-purple-950 py-8">
                <div className="container mx-auto text-center">
                    <nav className="mb-4">
                        <Link href="/about" className="mx-2 hover:underline">About</Link>
                        <Link href="/contact" className="mx-2 hover:underline">Contact</Link>
                        <Link href="/privacy" className="mx-2 hover:underline">Privacy Policy</Link>
                        <Link href="/terms" className="mx-2 hover:underline">Terms of Service</Link>
                    </nav>
                    <p>&copy; 2024 Testimonials Creator. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}