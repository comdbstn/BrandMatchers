import React from 'react';

function TeamSection() {
  const stats = [
    { number: '50만+', label: '연간 분석 데이터' },
    { number: '98%', label: 'AI 매칭 정확도' },
    { number: '15분', label: '평균 매칭 소요 시간' },
    { number: '95%', label: '협찬사 만족도' }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          AI 기술 기반의<br />
          최첨단 매칭 플랫폼
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          빅데이터와 AI 기술로 매년 수많은 브랜드와 행사가<br />
          BrandMatchers를 통해 성공적인 협찬 파트너십을 맺고 있습니다
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;