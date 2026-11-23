// Shared by extract-wa-messages.mjs (generator) and check-wa-messages.mjs (drift check).
//
// Finds the pre-filled WhatsApp messages written in the website source (app/ and components/).
// Only EXACT, fixed texts are collected:
//   1. https://wa.me/919158800517?text=<literal text>   (no ${...} parts)
//   2. message arrays:  msg: "Hi, ..."   and   wa: "Hi, ..."
// Not collected on purpose: form-generated messages (contain ${...}), dynamic templates
// (contain ${...} / string concatenation), and bare wa.me links (no text).

import fs from "node:fs"
import path from "node:path"

export const WA_NUMBER = "919158800517"

// Classification is NOT done here. Every message must be classified by a person in
// scripts/wa-message-review.mjs (APPROVED_SPECIFIC or GENERIC_EXCLUDED). A message that is in
// neither list is "unreviewed" and is never approved automatically.
import { APPROVED_SPECIFIC, GENERIC_EXCLUDED } from "./wa-message-review.mjs"

export { APPROVED_SPECIFIC, GENERIC_EXCLUDED }

// Same rules as lib/whatsapp-sheet-sync.ts (case, whitespace, trailing . ! ?).
export function normalize(text) {
  return String(text)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?\s]+$/, "")
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, out)
    else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) out.push(full)
  }
  return out
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export function extract(root) {
  const files = ["app", "components"].flatMap((d) => walk(path.join(root, d)))
  const found = new Map() // normalized -> { raw, files:Set }
  let bare = 0
  let templates = 0

  const add = (raw, file) => {
    const key = normalize(raw)
    if (!key) return
    if (!found.has(key)) found.set(key, { raw: raw.trim(), files: new Set() })
    found.get(key).files.add(path.relative(root, file))
  }

  for (const file of files) {
    const src = fs.readFileSync(file, "utf8")

    for (const m of src.matchAll(/wa\.me\/919158800517(\?text=([^"`'\s)]*))?/g)) {
      if (!m[1]) { bare++; continue }
      if (m[2].includes("${")) { templates++; continue }
      add(safeDecode(m[2]), file)
    }

    for (const m of src.matchAll(/\b(?:msg|wa):\s*"([^"]+)"/g)) {
      const text = m[1].includes("%") ? safeDecode(m[1]) : m[1]
      if (/^hi\b/i.test(text)) add(text, file)
    }
  }

  const approvedSet = new Set(APPROVED_SPECIFIC)
  const genericSet = new Set(GENERIC_EXCLUDED)
  const both = APPROVED_SPECIFIC.filter((k) => genericSet.has(k))
  if (both.length) throw new Error("Review file error: in both lists: " + both.join(" | "))

  const approved = []
  const excluded = [] // reviewed generic
  const unreviewed = [] // in neither list: never approved automatically
  for (const [key, v] of found) {
    if (approvedSet.has(key)) approved.push({ key, ...v })
    else if (genericSet.has(key)) excluded.push({ key, ...v })
    else unreviewed.push({ key, ...v })
  }
  approved.sort((a, b) => a.key.localeCompare(b.key))

  return {
    approved,
    excluded,
    unreviewed,
    totalDistinct: found.size,
    bare,
    templates,
    approvedMissing: APPROVED_SPECIFIC.filter((k) => !found.has(k)),
    genericMissing: GENERIC_EXCLUDED.filter((k) => !found.has(k)),
  }
}
