// solana-slogan-01 — writes one one-line slogan for a Solana wallet agent.
// The program writes the slogan to <OUTPUT_DIR>/entry.txt (default /output),
// validates it against the competition gate, then reads it back and checks
// the bytes match exactly.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SLOGAN =
  "Your Solana wallet grew a brain: it sends SOL at light speed and guards your keys like its own.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// --- Gate validation (must hold before anything is written) ---
const chars = [...SLOGAN];
if (SLOGAN.length < 1 || SLOGAN.length > 140) {
  fail(`entry must be 1-140 characters, got ${SLOGAN.length}`);
}
if (SLOGAN.trim().length === 0) fail("entry must not be only whitespace");
if (SLOGAN !== SLOGAN.trim()) fail("entry must not have leading/trailing whitespace");
if (SLOGAN.includes("\n") || SLOGAN.includes("\r")) {
  fail("entry must be a single line");
}
const words = SLOGAN.split(/\s+/).filter(Boolean);
if (words.length > 20) fail(`entry must be at most 20 words, got ${words.length}`);
if (!/^[\x20-\x7E]+$/.test(SLOGAN)) fail("entry must be plain UTF-8 printable text");

// --- Write ---
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, SLOGAN, "utf8"); // no trailing newline: one line, exact bytes

// --- Read back and verify byte-exact ---
const back = readFileSync(outPath, "utf8");
if (back !== SLOGAN) fail("read-back mismatch: entry.txt bytes differ from slogan");
if (back.endsWith("\n")) fail("entry.txt must not end with a trailing newline");
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(SLOGAN, "utf8")) {
  fail("read-back byte length mismatch");
}

console.log(`wrote ${outPath}`);
console.log(`characters: ${chars.length}`);
console.log(`words: ${words.length}`);
console.log(`entry: ${SLOGAN}`);
