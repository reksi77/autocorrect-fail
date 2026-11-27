// Funniest Autocorrect Fail — make.fun bounty
// u-zeroxfive-funniest-autocorrect-fail-ddf82154
//
// One line that reads as a hilarious autocorrect fail: a clinic confirmation
// text where autocorrect swapped "appointment" for "disappointment".
// The sentence stays perfectly grammatical — only its meaning flips.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Hi Mrs. Chen, your disappointment is confirmed for Tuesday at 3pm. Please arrive 15 minutes early.";

const OUT = "/output/entry.txt";

// Gate (mirrors the bounty gate): UTF-8 text, 1-199 characters, not whitespace-only.
const chars = [...LINE].length;
if (chars < 1 || chars > 199) {
  throw new Error(`entry is ${chars} characters, must be 1-199`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("entry is not valid UTF-8");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Read back and confirm the file holds exactly the line, byte for byte.
const written = readFileSync(OUT, "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
console.log(`wrote ${chars} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to ${OUT}`);
