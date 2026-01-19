import { loadProjects } from "@/lib/content";
import Link from "next/link";

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

          <p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>

          {/* Forward Links */}
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "0.75rem", 
            marginTop: "1.25rem" 
          }}>
            <Link 
              href={`/project/${project.slug}`} 
              style={{ 
                fontWeight: "bold", 
                color: "#0070f3",
                textDecoration: "none"
              }}
            >
              Read Engineering Deep-Dive →
            </Link>

            <a 
              href={project.repo_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "#666",
                fontSize: "0.95rem",
                textDecoration: "underline"
              }}
            >
              View GitHub Repository
            </a>
          </div>
        </section>
      ))}

      {/* NEW: Back to Home Link */}
      <div style={{ marginTop: "2rem" }}>
        <Link 
          href="/" 
          style={{ 
            color: "#666", 
            fontSize: "0.95rem", 
            textDecoration: "none" 
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}