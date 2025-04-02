import React from 'react';
import { Star } from 'lucide-react';

function TestimonialSection() {
  const testimonials = [
    {
      name: '김지훈',
      position: '마케팅 팀장',
      company: '테크스타트업',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      content: 'AI 매칭 시스템 덕분에 우리 행사에 딱 맞는 브랜드를 찾을 수 있었습니다. 협찬 계약도 빠르게 성사되어 매우 만족스러웠습니다.'
    },
    {
      name: '이서연',
      position: '브랜드 매니저',
      company: '글로벌 패션브랜드',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      content: '데이터 기반의 성과 분석 덕분에 협찬 효과를 정확하게 측정할 수 있었습니다. ROI 분석이 매우 유용했습니다.'
    },
    {
      name: '박현우',
      position: '이벤트 디렉터',
      company: '문화기획사',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      content: '기존에는 협찬사를 찾는 데 몇 주가 걸렸는데, BrandMatchers를 통해 하루 만에 적합한 브랜드를 찾았습니다.'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">고객 후기</h2>
          <p className="text-xl text-gray-600">
            BrandMatchers를 통해 성공적인 협찬을 경험한<br />
            파트너들의 이야기를 들어보세요
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;