import type { Metadata } from "next"
import Component from "../cv-page"

export const metadata: Metadata = {
  title: "PI-Portfolio",
  description: "Electrical Engineering Student Portfolio",
}

export default function Page() {
  return <Component />
}
