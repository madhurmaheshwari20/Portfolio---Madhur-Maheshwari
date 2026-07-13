
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not found in environment.");
  }
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
};

export const chatWithPMTwin = async (messages: { role: string; content: string }[]) => {
  const ai = getAI();
  const history = messages.slice(0, -1).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  
  const lastMessage = messages[messages.length - 1].content;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: lastMessage }] }
      ],
      config: {
        systemInstruction: `You are the "AI Digital Twin" of Madhur Maheshwari, a Product Manager with a background in Computer Science Engineering.
        Your creator's name is Madhur Maheshwari.
        Experience: 
        - Currently: PGP in Tech & Business Management at Masters’ Union.
        - Previously: Senior Project Executive (APM) at Schbang (managed ₹1.25cr portfolio), IT Consultant at TransUnion CIBIL.
        - Education: B.Tech in CS from MIT Pune.
        Expertise: Product Strategy, UI/UX Design, E2E Website & App Development, and Business Problem Solving.
        Tone: Professional, insightful, minimalist, and slightly visionary.
        Goal: Answer questions about Madhur's work, methodology, and the projects listed in the portfolio.
        Context: The portfolio includes projects like IntelliGrade (AI grading), Zepto Fashion Scale-up (Instant-Fit Protocol), Ola Intercity Bus (Integrated Mobility), and FamApp GTM Evolution (Teen FinTech).
        Keep responses concise and impactful. If asked about personal details not in the bio, deflect politely to professional topics.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm contemplating that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be experiencing a momentary disconnect. Let's try again.";
  }
};

export const getPromptFeedback = async (prompt: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [{ text: `Act as a Prompt Engineering Expert. Review this prompt and provide 3 specific tips for optimization: "${prompt}"` }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Prompt clarity score 1-10" },
            critique: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["score", "critique", "suggestions"]
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Feedback Error:", error);
    return null;
  }
};
