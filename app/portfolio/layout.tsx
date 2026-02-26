import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PI-Portfolio",
  description: "Portfolio PI Les Jaar 1",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
