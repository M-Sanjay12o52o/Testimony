import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Landing({ }: Props) {
    return (
        <div className="min-h-screen bg-purple-900 text-white">
            <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
            <h1 className="text-4xl font-bold mb-4">Welcome to Testimonials Creator</h1>
            <p className="mb-4">Create and manage your testimonials with ease</p>
            <Link href={"/signup"} className="bg-white text-purple-900 px-4 py-2 rounded">Get Started</Link>
        </div >
    )
}