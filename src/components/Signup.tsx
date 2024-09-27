import React from 'react'
import GoogleIcon from '../app/icons8-google.svg';
import Link from 'next/link';

type Props = {}

export default function Signup({ }: Props) {
    return (
        <div className="min-h-screen bg-purple-900 text-white flex items-center justify-center">
            <Link href="/" className="bg-white text-purple-900 px-4 py-2 rounded">Home</Link>
            <div className="bg-black p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <form className="space-y-4">
                    <input type="email" placeholder="Email" className="w-full p-2 rounded text-black" />
                    <input type="password" placeholder="Password" className="w-full p-2 rounded text-black" />
                    <button type="submit" className="w-full bg-purple-600 p-2 rounded">Sign Up</button>
                </form>
                <button className="w-full mt-4 bg-white text-black p-2 rounded flex items-center justify-center">
                    <div className="mr-2">
                        <div>
                            <GoogleIcon width={24} height={24} />
                        </div>
                        Sign up with Google
                    </div>
                </button>
            </div>
        </div>
    )
}