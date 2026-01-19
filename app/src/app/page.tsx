export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>AI Portfolio</h1>

      <p>
        This site presents a small, curated set of projects.
      </p>

      <p>
        The portfolio is static-first and content-driven. An AI layer is used
        later to help interpret the work, not to generate it.
      </p>

      <p>
        <a href="/portfolio">→ View the portfolio</a>
      </p>
    </main>
  );
}