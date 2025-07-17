import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Competenties | Elektrotechniek Student",
  description: "De competenties van een student Elektrotechnicus",
}

export default function CompetentiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
