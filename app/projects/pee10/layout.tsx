import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PI-Portfolio",
  description: "Gedetailleerd informatie van het PEE10 audio versterker project",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
