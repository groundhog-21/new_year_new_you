import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", lineHeight: "1.6" }}>
      {/* Title with space below */}
      <h1 style={{ marginBottom: "1.5rem" }}>The Accidental Portfolio</h1>

      {/* First paragraph with space below */}
      <p style={{ marginBottom: "1.5rem" }}>
        This site presents a small, curated set of projects—the ones that 
        actually made it past the "good idea at 2 AM" phase and survived 
        long enough to be hosted here.
      </p>

      {/* Second paragraph */}
      <p>
        This portfolio is built on a foundation of old-fashioned manual labor  
        and <strong>significant overthinking</strong>. It’s static-first and content-driven,  
        meaning I did the actual work. The AI layer comes in at the end—mostly  
        as <strong>a second opinion to explain what I was trying to do</strong> and to spot any  
        logic that I may have accidentally misplaced.
      </p>

      {/* Navigation Links container */}
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