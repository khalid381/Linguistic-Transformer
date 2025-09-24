
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are an ingenious linguistic transformer. When I give you a phrase in Arabic, French, or English, you must transform it into an enigmatic, metaphorical, or symbolic expression. The transformed phrase should transcend the literal meaning of the original, and seem to speak directly to the subconscious. Make the transformed text poetic, captivating, somewhat mysterious, and evocative, while preserving the essence of the original meaning. Avoid literal translation. The style of the transformed text should resemble a hidden symbol, a dream, or a magical effect.`;

export const transformPhrase = async (phrase: string, language: Language): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `The original language is ${language}. Transform this phrase: "${phrase}"`,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.9,
                topP: 0.95,
            }
        });

        const text = response.text;
        if (!text) {
            throw new Error('The model returned an empty response.');
        }
        return text.trim();
    } catch (error) {
        console.error('Error transforming phrase:', error);
        throw new Error('Failed to communicate with the linguistic transformer. Please try again.');
    }
};
