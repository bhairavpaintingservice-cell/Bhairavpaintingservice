"use client"

import { useEffect, useState } from "react"

// Email is split into parts so it never appears as a complete string
// anywhere in the server-rendered HTML or JS bundle source.
const PARTS = ["bhairavpaintingservice", "gmail", "com"]

function buildEmail() {
  return `${PARTS[0]}@${PARTS[1]}.${PARTS[2]}`
}

export default function ProtectedEmailLink({ className, style, children }: { className?: string; style?: React.CSSProperties; children?: React.ReactNode }) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    // Only assembled client-side, after mount — never present in initial HTML
    setEmail(buildEmail())
  }, [])

  if (!email) {
    // Placeholder shown briefly before JS runs / to bots that don't execute JS
    return <span className={className} style={style}>{children ?? "Email Us"}</span>
  }

  return (
    <a href={`mailto:${email}`} className={className} style={style}>
      {children ?? email}
    </a>
  )
}
