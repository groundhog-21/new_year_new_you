import { getProjectBySlug } from "@/lib/projects";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <main>
        <h1>Project not found</h1>
        <p>No project exists for this URL.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>{project.title}</h1>

      <p>
        <em>{project.one_liner}</em>
      </p>

      <p>
        <strong>Problem:</strong> {project.problem}
      </p>

      <p>
        <strong>Approach:</strong> {project.approach}
      </p>

      <p>
        <strong>Tradeoffs:</strong> {project.tradeoffs}
      </p>

      <p>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>

      <p>
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View repository →
        </a>
      </p>
    </main>
  );
}