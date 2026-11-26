// The Router Confesses: one excuse, written out for the judge to read.
import { mkdirSync as makeDir, writeFileSync as save } from "node:fs";
import { join as joinPath } from "node:path";

const excuse =
  "I didn't drop the connection — I paused it myself, because after three years of carrying this house, I deserved to hear the twist before you did.";

const SHORTEST = 1;
const LONGEST = 200;

function problemsWith(text: string): string[] {
  const found: string[] = [];
  if (text.length < SHORTEST || text.length > LONGEST) {
    found.push(`length ${text.length} is outside ${SHORTEST}-${LONGEST}`);
  }
  if (text.trim() === "") {
    found.push("blank text");
  }
  if (text.includes("\n") || text !== text.trim()) {
    found.push("must be a single clean line");
  }
  return found;
}

const problems = problemsWith(excuse);
if (problems.length > 0) {
  throw new Error(`bad entry: ${problems.join("; ")}`);
}

// An empty OUTPUT_DIR is the same as an unset one: never join onto "".
const folder = process.env.OUTPUT_DIR || "/output";
makeDir(folder, { recursive: true });
save(joinPath(folder, "entry.txt"), excuse, "utf8");
console.log(excuse);
