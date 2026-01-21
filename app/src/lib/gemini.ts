"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function getProjectInsight(title: string, one_liner: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    
    const result = await model.generateContent(`Witty one-liner about: ${title}`);
    
    // Check if the response actually has a result
    if (!result.response) {
      throw new Error("Received empty response from Gemini");
    }

    return result.response.text().trim();

  } catch (error: any) {
    // ISOLATION LOGS:
    console.error("--- DEBUG START ---");
    console.error("Project Title:", title);
    
    if (error.status) {
      console.error("HTTP Status Code:", error.status); // e.g. 404, 403, 429
    }
    
    if (error.response?.data) {
      console.error("Detailed API Data:", JSON.stringify(error.response.data));
    } else {
      console.error("Full Error Object:", error);
    }
    console.error("--- DEBUG END ---");

    return `Still figuring out how to describe ${title} without sounding too excited.`;
  }
}