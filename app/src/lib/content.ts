import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  title: string;
  one_liner: string;
  problem: string;
  approach: string;
  tradeoffs: string;
  tech: string[];
  repo_url: string;
};

export function loadProjects(): Project[] {
  const filePath = path.join(
    process.cwd(),
    "..",
    "content",
    "projects.json"
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}