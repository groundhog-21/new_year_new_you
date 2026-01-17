import { loadProjects } from "@/lib/content";

export default function PortfolioPage() {
  const projects = loadProjects();

  return (
    <main style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>Portfolio</h1>

      {projects.map((project) => (
        <section
          key={project.slug}
          style={{
            marginTop: "2rem",
            paddingBottom: "1.5rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2>{project.title}</h2>
          <p><em>{project.one_liner}</em></p>

          <p><strong>Problem:</strong> {project.problem}</p>
          <p><strong>Approach:</strong> {project.approach}</p>
          <p><strong>Tradeoffs:</strong> {project.tradeoffs}</p>

          <p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>

          <p>
            <a href={project.repo_url} target="_blank">
              View repository →
            </a>
          </p>
        </section>
      ))}
    </main>
  );
}