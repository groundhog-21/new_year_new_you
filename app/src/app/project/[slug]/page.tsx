export const dynamic = 'force-dynamic';

import { getProjectBySlug } from "@/lib/projects";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main style={{ padding: "2rem", lineHeight: "1.6" }}>
        <h1 style={{ marginBottom: "1.5rem" }}>Project not found</h1>
        <p style={{ marginBottom: "1.5rem" }}>No project exists for this URL (Slug: {slug}).</p>
        <Link href="/portfolio" style={{ color: "#0070f3" }}>← Back to Portfolio</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", lineHeight: "1.6" }}>
      {/* Title with consistent blank line */}
      <h1 style={{ marginBottom: "1.5rem" }}>{project.title}</h1>

      <p style={{ marginBottom: "1.25rem" }}>
        <em>{project.one_liner}</em>
      </p>

      <p style={{ marginBottom: "1rem" }}>
        <strong>Problem:</strong> {project.problem}
      </p>

      <p style={{ marginBottom: "1rem" }}>
        <strong>Approach:</strong> {project.approach}
      </p>

      <p style={{ marginBottom: "1rem" }}>
        <strong>Tradeoffs:</strong> {project.tradeoffs}
      </p>

      <p style={{ marginBottom: "1rem" }}>
        <strong>Tech:</strong> {project.tech.join(", ")}
      </p>

      {/* Consistent Bottom Navigation and Line */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.75rem", 
        marginTop: "2.5rem",      
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
        
        <Link href="/portfolio" style={{ color: "#666", fontSize: "0.95rem", textDecoration: "none" }}>
          ← Back to Portfolio
        </Link>
      </div>
    </main>
  );
}