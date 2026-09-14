/**
 * Publish the static export to the `gh-pages` branch.
 *
 * This is the no-GitHub-Actions route: it builds locally and force-pushes the
 * contents of ./out as a single commit, so GitHub Pages can serve the branch
 * directly ("Deploy from a branch"). The Actions workflow in
 * .github/workflows/deploy.yml does the same thing automatically once Actions
 * is available on the account.
 */
import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const BRANCH = "gh-pages";

const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { stdio: "inherit", shell: false, ...opts });

const capture = (cmd, args) =>
  execFileSync(cmd, args, { encoding: "utf8" }).trim();

// A project page lives under /<repo>, a <user>.github.io repo lives at the root.
const remote = capture("git", ["remote", "get-url", "origin"]);
const repo = remote.replace(/\.git$/, "").split("/").pop();
const owner = remote.replace(/\.git$/, "").split("/").at(-2);
const basePath = repo.toLowerCase() === `${owner.toLowerCase()}.github.io` ? "" : `/${repo}`;

console.log(`\n▲ Building static export for https://${owner}.github.io${basePath}/\n`);
run(process.platform === "win32" ? "npm.cmd" : "npm", ["run", "build"], {
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath },
});

const staging = mkdtempSync(join(tmpdir(), "gh-pages-"));
try {
  cpSync("out", staging, { recursive: true });
  // Without this, Pages runs Jekyll and silently drops the _next directory.
  writeFileSync(join(staging, ".nojekyll"), "");

  const git = (...args) => run("git", ["-C", staging, ...args]);
  git("init", "-q", "-b", BRANCH);
  git("add", "-A");
  git("-c", "user.name=deploy", "-c", "user.email=deploy@local", "commit", "-q", "-m",
      `Deploy ${capture("git", ["rev-parse", "--short", "HEAD"])}`);

  console.log(`\n▲ Pushing to ${BRANCH}\n`);
  git("push", "--force", remote, `${BRANCH}:${BRANCH}`);

  console.log(`\n✓ Published. Settings → Pages → Source: "Deploy from a branch" → ${BRANCH} / (root)`);
  console.log(`  https://${owner}.github.io${basePath}/\n`);
} finally {
  rmSync(staging, { recursive: true, force: true });
}
