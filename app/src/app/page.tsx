import Link from "next/link";

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

      {/* This container creates the blue link and the consistent bottom line */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.75rem", 
        marginTop: "2rem",      
        paddingBottom: "1.5rem", 
        borderBottom: "1px solid #ddd" 
      }}>
        <Link 
          href="/how-i-work" 
          style={{
            fontWeight: "bold",
            color: "#0070f3",
            textDecoration: "none" 
          }}
        >
          → How I work
        </Link>
        <Link 
          href="/portfolio" 
          style={{ 
            fontWeight: "bold", 
            color: "#0070f3", 
            textDecoration: "none" 
          }}
        >
          → View the portfolio
        </Link>
      </div>
    </main>
  );
}