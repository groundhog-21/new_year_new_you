# Portfolio Application — Technical Guide
This directory contains the Next.js source code for the "Accidental Portfolio." It is designed for high-performance delivery via Google Cloud Run and utilizes Gemini 3 Flash for dynamic content synthesis.

## 🛠 Local Development
First, install dependencies:

```npm install ```

Create a `.env.local` file in this directory and add your API key:

```GOOGLE_GENERATIVE_AI_API_KEY=your_key_here ```

Run the development server: ```npm run dev ```

Open http://localhost:3000 to view the application.

### 🐳 Containerization & Deployment
This project uses a multi-stage Docker build to keep the final production image small and secure.

1. The .gcloudignore / .dockerignore
To ensure fast deployments, we utilize `.gcloudignore` to prevent the upload of `node_modules` and `.next` folders (reducing upload size from ~850MB to ~300KB).

2. Build and Run Locally (Docker)
To test the production container locally: ```docker build -t hobbyist-portfolio . docker run -p 8080:8080 --env-file .env.local hobbyist-portfolio ```

3. Deploy to Google Cloud Run
Deployments are handled via the gcloud CLI. The environment variable for the Gemini API is injected at the service level:

```
gcloud run deploy hobbyist-portfolio `

--source . `

--region us-central1 `

--allow-unauthenticated `

--set-env-vars GOOGLE_GENERATIVE_AI_API_KEY=your_actual_api_key_here
```

### 🏗 Key Logic: Gemini Integration
The core AI logic resides in `src/lib/gemini.ts`.

Model: `gemini-3-flash-preview`

Execution: Server-side only (Next.js Server Actions)

Error Handling: Implements a `try/catch` wrapper with debug isolation logs to ensure the UI remains functional even during API rate-limiting or outages.

*Note: This project was bootstrapped with `create-next-app` but has been heavily modified for the 2026 Portfolio Challenge.*