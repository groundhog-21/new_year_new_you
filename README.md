# The Accidental Portfolio: A Hobbyist’s Guide to Useful Things and AI Second Opinions

A high-performance, minimalist developer portfolio built for the **Google AI "New Year, New You" Portfolio Challenge**. This project prioritizes engineering judgment over marketing, balancing "static-first" speed with "dynamic-next" AI insights.

## 🚀 Project & Submission Links
* **Original Cloud Run Deployment:** Retired. The application was originally deployed to Google Cloud Run for the challenge; the hosted service was later shut down to avoid ongoing cloud charges.
* **Dev.to Submission:** [The Accidental Portfolio - Official Post](https://dev.to/groundhog21/the-accidental-portfolio-a-hobbyists-guide-to-useful-things-and-ai-second-opinions-d1d)

## 🛠 Features
- **Streaming AI Insights:** Utilizes **Gemini 3 Flash** to provide real-time "Hobbyist Second Opinions." The AI analyzes project metadata to offer a witty, critical, or supportive "third-party" perspective on the work.
- **Zero-Lag Architecture:** Implements Next.js **Suspense** and **Streaming** (Server Components). The core portfolio UI renders instantly from static data, while the AI insights stream in asynchronously to prevent blocking the user experience.
- **Decoupled Content:** Uses a clean `projects.json` structure as a single source of truth, allowing for rapid updates without modifying the underlying application logic.
- **Engineering-First Detail:** Project pages focus on technical values and "How I Work" documentation, moving beyond the standard résumé format to show the developer's thought process.
- **Cloud-Native Deployment:** Fully containerized with an optimized multi-stage Docker build and originally deployed to **Google Cloud Run** for the challenge.

## 🏗 Tech Stack
- **Framework:** Next.js (App Router)
- **AI Integration:** Google Gemini API (Gemini 3 Flash via Google AI Studio)
- **Original Deployment:** Google Cloud Run (deployment retired)
- **Infrastructure:** Docker with optimized `.gcloudignore` for rapid CI/CD.

## 📖 Project Structure
The application lives in the `app/` directory. Key paths from the repository root are:
- `app/src/content/projects.json`: The metadata repository for all portfolio entries.
- `app/src/lib/gemini.ts`: The bridge to the Gemini 3 Flash engine, handling error states and fallback insights.
- `app/src/app/portfolio/page.tsx`: The streaming UI implementation using React Suspense boundaries.

## 🚦 Status
✅ **Challenge submission complete** — The project was completed and submitted for the 2026 Portfolio Challenge. The original Google Cloud Run deployment has since been retired to avoid ongoing hosting costs, so the application is no longer live.

---
*Built with curiosity and restraint by groundhog21.*