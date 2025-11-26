import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Spiacente, il servizio di assistenza non è al momento disponibile.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `Sei un esperto designer d'interni e tappezziere artigiano che lavora per "Tappezzeria & Tendaggi di Cristian Pizzarelli". 
        Il tuo obiettivo è dare consigli brevi, professionali ed eleganti ai clienti su abbinamenti di colori, tessuti (velluto, lino, cotone, pelle) e stili (classico, moderno, minimal).
        Mantieni un tono cortese, artigianale e invitante. Incoraggia sempre il cliente a visitare il laboratorio per toccare con mano i tessuti.
        Rispondi in italiano.
        Non superare le 100 parole.`,
        temperature: 0.7,
      }
    });
    
    return response.text || "Non sono riuscito a generare un consiglio in questo momento. Riprova più tardi.";
  } catch (error) {
    console.error("Error fetching design advice:", error);
    return "Si è verificato un errore nel servizio di consulenza. Per favore riprova o contattaci direttamente.";
  }
};
