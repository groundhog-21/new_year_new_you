import Link from "next/link";

export default function HowIWorkPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", lineHeight: "1.6" }}>
      {/* Title with consistent blank line after it */}
      <h1 style={{ marginBottom: "1.5rem" }}>How I Work</h1>

      <section style={{ marginTop: "2rem" }}>
        {/* Subheading with consistent blank line after it */}
        <h2 style={{ marginBottom: "1rem" }}>Engineering Values</h2>
        <p>
          I like to build <strong>useful things as simply as possible</strong>. 
          Engineering always has to be fun for me—it's a hobby, not a profession—so 
          I often like to take a <strong>humorous, gamified approach</strong>.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        {/* Subheading with consistent blank line after it */}
        <h2 style={{ marginBottom: "1rem" }}>AI Philosophy</h2>
        <p>
          I try to integrate AI into my projects <strong>to the greatest extent possible</strong>,  
          using AI throughout the development process itself, both creative and technical.
        </p>
      </section>

      {/* Consistent Bottom Navigation and Line */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "0.75rem", 
        marginTop: "2rem",      
        paddingBottom: "1.5rem", 
        borderBottom: "1px solid #ddd" 
      }}>
        <Link href="/" style={{ color: "#666", fontSize: "0.95rem", textDecoration: "none" }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}