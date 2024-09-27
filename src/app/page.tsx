"use client"

import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-900 text-white">
      <Navigation />
      <div>
        <Link href="/" />
        <Link href="/signup" />
        <Link href="/signin" />
        <Link href="/dashboard" />
        <Link href="/settings" />
        <Link href="/pricing" />
      </div>
    </div>
  );
}
