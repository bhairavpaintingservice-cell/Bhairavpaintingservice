// Drift check: fails if the website WhatsApp messages and lib/website-whatsapp-messages.ts disagree.
// Run from the project root:   node scripts/check-wa-messages.mjs
// Exit code 0 = in sync, 1 = drift (re-run scripts/extract-wa-messages.mjs and review the diff).

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { extract, normalize } from "./wa-message-extract.mjs"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const result = extract(root)

const file = fs.readFileSync(path.join(root, "lib", "website-whatsapp-messages.ts"), "utf8")
const listed = [...file.matchAll(/^\s*("(?:[^"\\]|\\.)*"),$/gm)].map((m) => JSON.parse(m[1]))
const listedKeys = new Set(listed.map(normalize))
const siteKeys = new Set(result.approved.map((m) => m.key))

const added = result.approved.filter((m) => !listedKeys.has(m.key))
const removedFromList = [...listedKeys].filter((k) => !siteKeys.has(k))

let failed = false
if (result.unreviewed.length) {
  failed = true
  console.error("UNREVIEWED website messages (in neither list of scripts/wa-message-review.mjs). They are NOT approved:")
  result.unreviewed.forEach((m) => console.error(`  ? ${m.raw}   [${[...m.files].join(", ")}]`))
}
if (result.approvedMissing.length) {
  failed = true
  console.error("Reviewed APPROVED messages that no longer exist on the website:")
  result.approvedMissing.forEach((k) => console.error(`  - ${k}`))
}
if (added.length) {
  failed = true
  console.error("Approved messages missing from lib/website-whatsapp-messages.ts (re-run the generator):")
  added.forEach((m) => console.error(`  + ${m.raw}`))
}
if (removedFromList.length) {
  failed = true
  console.error("lib/website-whatsapp-messages.ts has messages that are not approved/on the website:")
  removedFromList.forEach((k) => console.error(`  - ${k}`))
}
if (result.genericMissing.length) {
  console.warn("Note: reviewed generic messages not found on the website (harmless; clean up the review file if intended):")
  result.genericMissing.forEach((g) => console.warn("  ~ " + g))
}

if (failed) {
  console.error("\nDRIFT FOUND. Classify new messages in scripts/wa-message-review.mjs, then run: node scripts/extract-wa-messages.mjs")
  process.exit(1)
}
console.log(`OK: ${listed.length} listed messages match the website (${result.excluded.length} generic excluded, 0 unreviewed).`)
