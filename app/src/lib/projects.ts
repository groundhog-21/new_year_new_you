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

export function getProjectBySlug(slug: string): Project | undefined {
  // 1. Get the path to the file
  const filePath = path.join(process.cwd(), "src/content/projects.json");
  
  // 2. Read the file directly from the disk
  const fileContents = fs.readFileSync(filePath, "utf8");
  
  // 3. Parse it and find the project
  const projects: Project[] = JSON.parse(fileContents);
  
  return projects.find((p) => p.slug === slug);
}