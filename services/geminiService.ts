
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateProductDescription(productName: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `당신은 고급 가구 브랜드 '유원EPS'의 카피라이터입니다. 제품명 '${productName}'에 대한 매력적이고 전문적인 제품 설명을 2~3문장으로 작성해주세요. 한국어로 작성하세요.`,
      });
      return response.text || "설명을 생성할 수 없습니다.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "AI 추천 설명을 불러오지 못했습니다.";
    }
  }

  async suggestBlogTopic(currentTopic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `'${currentTopic}'와 관련된 블로그 게시물 제목 3가지를 추천해주세요. 한 문장씩 리스트 형태로 작성하세요.`,
      });
      return response.text || "추천할 주제가 없습니다.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "AI 주제 추천 실패.";
    }
  }
}

export const geminiService = new GeminiService();
