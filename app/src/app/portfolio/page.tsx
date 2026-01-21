// 1. THIS IS THE KEY: We must force dynamic rendering so it checks the API key at runtime
export const dynamic = 'force-dynamic';

import { loadProjects } from "@/lib/content";
import { getProjectInsight } from "@/lib/gemini";
import Link from "next/link";
import { Suspense } from "react";

// 1. We create a dedicated AI component that handles its own waiting
async function GeminiInsight({ title, oneLiner }: { title: string, oneLiner: string }) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return <span>AI analysis will be available on the live site.</span>;
  }

  try {
    const insight = await getProjectInsight(title, oneLiner);
    return <span>{insight}</span>;
  } catch (error) {
    console.error(`AI Error for ${title}:`, error);
    return <span>Hobbyist analysis is temporarily sleeping.</span>;
  }
}

export default function PortfolioPage() {
  const projects = loadProjects();

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", lineHeight: "1.6" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Portfolio</h1>

      {projects.map((project) => (
        <section
          key={project.slug}
          style={{
            marginTop: "2.5rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2 style={{ marginBottom: "0.5rem" }}>{project.title}</h2>
          <p style={{ marginBottom: "1rem" }}><em>{project.one_liner}</em></p>

          {/* 2. THE MAGIC: Suspense allows the rest of the page to load NOW */}
          <div style={{ 
            fontSize: "0.9rem", 
            color: "#0070f3", 
            backgroundColor: "#f0f7ff", 
            padding: "0.75rem", 
            borderRadius: "8px",
            marginTop: "1rem",
            borderLeft: "4px solid #0070f3"
          }}>
            <strong>Hobbyist Insight (Gemini):</strong>{" "}
            <Suspense fallback={<span style={{ opacity: 0.6 }}>Consulting the AI...</span>}>
              <GeminiInsight title={project.title} oneLiner={project.one_liner} />
            </Suspense>
          </div>

          <p style={{ marginTop: "1.25rem" }}>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.25rem" }}>
            <Link 
              href={`/project/${project.slug}`} 
              style={{ fontWeight: "bold", color: "#0070f3", textDecoration: "none" }}
            >
              Read Engineering Deep-Dive →
            </Link>
          </div>
        </section>
      ))}

      <div style={{ marginTop: "2.5rem", paddingBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "#666", fontSize: "0.95rem", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}