// The One-Line Cat Joke That Lands — one cat joke, under 200 characters.
// Writes the joke to /output/entry.txt.
import { mkdir, writeFile } from "node:fs/promises";

class EntryWriter {
  readonly path = "/output/entry.txt";
  readonly limit = 200;

  check(line: string): number {
    const n = [...line].length;
    if (n < 1 || n > this.limit) {
      throw new Error(`entry is ${n} chars, must be 1-${this.limit}`);
    }
    return n;
  }

  async write(line: string): Promise<void> {
    const n = this.check(line);
    await mkdir("/output", { recursive: true });
    await writeFile(this.path, line, "utf8");
    console.log(`wrote ${n} chars to ${this.path}`);
  }
}

const LINE =
  "I bought my cat a $200 bed. She sleeps in the box it came in, on top of my laptop, during my calls.";

await new EntryWriter().write(LINE);
