// The Internet in One Word — make.fun bounty entry.
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// One word for the whole internet, written to /output/entry.txt and
// nothing else: no files, no code, no links, just the word itself.
//
// The word is "Brainrot". Eight letters, one beat, funny on its own with
// no explanation needed, and true of the internet as a whole rather than
// one app or one mood: the endless feed does not inform you, it rots your
// brain, and everybody online already knows it. It is not the first word
// anyone reaches for — "chaos", "cats", "memes" are the obvious ones —
// which is exactly why it surprises and lands.
//
// No trailing newline: the file is the word itself, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Brainrot";

// The gate allows 1 to 30 characters of UTF-8 text, not only white space.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`word is ${WORD.length} characters, outside the 1-30 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
