"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 p-6">
      <Link href="/">
        <div className="relative w-18 h-10">
          <Image
            src="/Logo NITS ID Text.png"
            alt="NITS ID Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
    </header>
  );
}
