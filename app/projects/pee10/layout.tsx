import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PEE10 | Audio Versterker",
  description: "Gedetailleerd verslag van het PEE10 audio versterker project",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
