import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project PEE20 | Autonome Robot",
  description: "Gedetailleerd verslag van het PEE20 robotproject met MSP430G2553 microcontroller",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
