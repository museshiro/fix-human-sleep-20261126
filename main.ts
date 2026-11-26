import { mkdirSync, writeFileSync } from "node:fs";

// Design: dry-wit changelog voice. "Fixed human sleep" states the fix
// plainly; "3 AM existential dread moved to backlog" is the joke —
// treating a very human 3 AM feeling as a ticket deferred by the dev team.
const LINE =
  "Fixed human sleep. Yes, finally. Default 8 hours restored; 3 AM existential dread moved to backlog. QA will verify with a nap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
