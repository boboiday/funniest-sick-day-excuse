import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Sick-Day Excuse — one line, 1-200 UTF-8 chars.
// Scene: me, home, fever + sandpaper throat. One mechanism escalated 3x
// (39.1 fever -> sandpaper throat -> doctor's text), ending on the quoted
// artifact — the doctor's note, which flips the sympathy by accusing a hangover.
const ENTRY =
  "Can't come in today: fever 39.1, throat like sandpaper, and my doctor just texted: 'bed rest, fluids, and stop asking me to write you a note for a hangover.'";

// Gate: exactly one line, 1-200 UTF-8 chars, nothing else.
if (/[\n\r]/.test(ENTRY)) throw new Error("entry must be a single line");
const entryChars = [...ENTRY].length;
if (entryChars < 1 || entryChars > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entryChars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
