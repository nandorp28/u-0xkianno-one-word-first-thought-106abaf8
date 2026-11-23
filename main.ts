// One Word, First Thought — make.fun entry (u-0xkianno-one-word-first-thought-106abaf8)
// Writes exactly one word to /output/entry.txt. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "defenestration";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// exactly one word, not only white space — enforce it before writing.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
