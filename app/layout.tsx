import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/Navbar"
import "./globals.css"

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FinRisk — Personal Finance Risk Dashboard",
  description: "Compare risk profiles for Savings, Bonds, Index Funds, and Crypto",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
