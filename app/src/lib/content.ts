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
  // We change the path to look INSIDE the src folder instead of the parent folder
  const filePath = path.join(
    process.cwd(),
    "src",      // Look in src
    "content",  // then content
    "projects.json"
  );

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Could not find projects.json at:", filePath);
    return []; // Return an empty list so the page doesn't crash entirely
  }
}