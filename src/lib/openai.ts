import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY',
  dangerouslyAllowBrowser: true
});

// Mock recommendations based on event type
const getMockRecommendations = (eventData: EventData) => {
  const recommendations = {
    conference: [
      {
        brandName: "삼성전자",
        industry: "IT/전자",
        matchScore: "95",
        reason: "기술 컨퍼런스와의 높은 시너지 및 타겟 고객층 일치",
        estimatedBudget: "5000만원",
        successRate: "92%"
      },
      {
        brandName: "네이버",
        industry: "IT/인터넷",
        matchScore: "90",
        reason: "디지털 혁신 이미지와 전문성 있는 행사 연계",
        estimatedBudget: "3000만원",
        successRate: "88%"
      }
    ],
    exhibition: [
      {
        brandName: "LG전자",
        industry: "IT/전자",
        matchScore: "93",
        reason: "혁신 제품 전시와 브랜드 가치 상승 효과",
        estimatedBudget: "7000만원",
        successRate: "91%"
      },
      {
        brandName: "현대자동차",
        industry: "자동차",
        matchScore: "88",
        reason: "첨단 기술 전시회와의 시너지 효과",
        estimatedBudget: "1억원",
        successRate: "87%"
      }
    ],
    performance: [
      {
        brandName: "카카오",
        industry: "IT/엔터테인먼트",
        matchScore: "91",
        reason: "젊은 층 타겟 문화 행사와의 브랜드 적합성",
        estimatedBudget: "4000만원",
        successRate: "89%"
      },
      {
        brandName: "아디다스",
        industry: "스포츠/패션",
        matchScore: "87",
        reason: "역동적인 공연과 브랜드 이미지 매칭",
        estimatedBudget: "3000만원",
        successRate: "85%"
      }
    ],
    sports: [
      {
        brandName: "나이키",
        industry: "스포츠/패션",
        matchScore: "96",
        reason: "스포츠 이벤트와 완벽한 브랜드 적합성",
        estimatedBudget: "8000만원",
        successRate: "94%"
      },
      {
        brandName: "SK텔레콤",
        industry: "통신",
        matchScore: "85",
        reason: "5G 기술과 스포츠 중계 시너지",
        estimatedBudget: "6000만원",
        successRate: "83%"
      }
    ]
  };

  return {
    recommendations: recommendations[eventData.eventType as keyof typeof recommendations] || []
  };
};

export interface EventData {
  eventType: string;
  attendees: string;
  eventName?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  sponsorship?: string;
  description?: string;
}

export async function getAIRecommendations(eventData: EventData) {
  try {
    const prompt = `
행사 정보:
- 유형: ${eventData.eventType}
- 예상 참가자 수: ${eventData.attendees}명
${eventData.eventName ? `- 행사명: ${eventData.eventName}` : ''}
${eventData.location ? `- 장소: ${eventData.location}` : ''}
${eventData.description ? `- 설명: ${eventData.description}` : ''}

위 행사에 적합한 브랜드를 추천해주세요. 다음 형식으로 응답해주세요:

{
  "recommendations": [
    {
      "brandName": "브랜드명",
      "industry": "업종",
      "matchScore": "매칭 점수(0-100)",
      "reason": "추천 이유",
      "estimatedBudget": "예상 예산",
      "successRate": "예상 성공률"
    }
  ]
}`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "당신은 브랜드-행사 매칭 전문가입니다. 행사 정보를 분석하여 최적의 브랜드를 추천해주세요."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" }
    });

    const response = completion.choices[0].message.content;
    if (!response) {
      throw new Error("AI 응답을 받지 못했습니다.");
    }

    return JSON.parse(response);
  } catch (error) {
    console.error('OpenAI API 오류:', error);
    // API 호출 실패 시 미리 정의된 추천 목록 반환
    return getMockRecommendations(eventData);
  }
}