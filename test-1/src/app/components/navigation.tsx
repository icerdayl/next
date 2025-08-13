"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const pathname = usePathname()

    return(
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mx-4":"text-blue-500 mr-4"}>
            Home
            </Link>
            <Link href="/about" className={pathname === "/about" ? "font-bold mx-4":"text-blue-500 mr-4"}>
            About</Link>
            <Link href="/product/1" className={pathname.startsWith("/product/1") ? "font-bold mx-4":"text-blue-500 mr-4"}>Product ONE!</Link>
        </nav>
    )
}