# The Accidental Portfolio: A Hobbyist’s Guide to Useful Things and AI Second Opinions

A high-performance, minimalist developer portfolio built for the **Dev.to "New Year, New You" Portfolio Challenge**. This project balances "static-first" speed with "dynamic-next" AI insights.

## 🚀 Live Links
* **Live Application:** [View Portfolio on Google Cloud Run](https://hobbyist-portfolio-106125580489.us-central1.run.app/portfolio)
* **Dev.to Submission:** [The Accidental Portfolio - Official Post](https://dev.to/groundhog21/the-accidental-portfolio-a-hobbyists-guide-to-useful-things-and-ai-second-opinions-d1d)

## 🛠 Features
- **Streaming AI Insights:** Uses **Gemini 3 Flash** to provide real-time "Hobbyist Second Opinions" on project summaries.
- **Zero-Lag Architecture:** Implements Next.js **Suspense** and **Streaming** so the UI loads instantly while the AI generates in the background.
- **Dynamic Content:** A clean, decoupled data structure using `projects.json` for easy maintenance.
- **Cloud-Native:** Containerized with Docker and deployed to **Google Cloud Run** with optimized scaling to prevent "cold starts."

## 🏗 Tech Stack
- **Framework:** Next.js 16 (App Router)
- **AI:** Google Gemini API (Gemini 3 Flash)
- **Deployment:** Google Cloud Run
- **Infrastructure:** Docker, GCR (Google Container Registry)

## 📖 Project Structure
The project is organized to separate content from logic:
- `app/src/content/projects.json`: The single source of truth for portfolio data.
- `app/src/lib/gemini.ts`: The bridge to the Generative AI engine.
- `app/src/app/portfolio/page.tsx`: The streaming UI implementation using React Suspense.

## 🚦 Status
✅ **Complete** — Deployed and live for the 2026 Portfolio Challenge.

---
*Built with curiosity by groundhog21.*