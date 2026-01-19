import projects from "@/content/projects.json";

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
  return (projects as Project[]).find((p) => p.slug === slug);
}