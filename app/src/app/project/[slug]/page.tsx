import { getProjectBySlug } from "@/lib/projects";
import Link from "next/link"; // Ensure this is imported

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Project not found</h1>
        <p>No project exists for this URL (Slug: {slug}).</p>
        <Link href="/portfolio">← Back to Portfolio</Link>
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

      {/* This is the new section that matches the Portfolio style */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.75rem", 
        marginTop: "2rem",      
        paddingBottom: "1.5rem", 
        borderBottom: "1px solid #ddd" 
      }}>
        <a 
          href={project.repo_url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", color: "#0070f3", textDecoration: "none" }}
        >
          View GitHub Repository →
        </a>
        
        <Link href="/portfolio" style={{ color: "#666", fontSize: "0.95rem" }}>
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}