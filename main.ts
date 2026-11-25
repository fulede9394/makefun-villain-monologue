// A 100-word monologue: a dark lord, thirty years into his reign, receives the heroes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Heroes. Sit down—no, the other chair, that one bites. You came to end my reign, yes? Keep the sword sheathed; the floor was only just waxed. Thirty years I've held the Kestrelmere passes, taxed every candle that crossed them, and still the ledgers never balance. The dragon left in spring—said the damp got into his wings. Good riddance, honestly. He ate the tax collectors. Tonight I was going to raze your village by moonrise. Instead I'll sign the truce, keep the passes, and go to bed before the candles gutter. Strike if you must. Just—let me finish this sentence first.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
