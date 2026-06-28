"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggle"
import { TrendingUp } from "lucide-react"

const nav = [
  { href: "/", label: "Overview" },
  { href: "/savings", label: "Savings" },
  { href: "/bonds", label: "Bonds" },
  { href: "/index-funds", label: "Index Funds" },
  { href: "/crypto", label: "Crypto" },
]

export function Navbar() {
  const path = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <TrendingUp className="h-5 w-5 text-violet-500" />
          FinRisk
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                path === n.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
