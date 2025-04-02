import React from 'react';
import { Zap, Users, BarChart, Clock, Shield, Target, Award, TrendingUp, ArrowRight } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'AI 기반 매칭',
      description: '30개 이상의 데이터 포인트를 분석하여 최적의 브랜드-행사 매칭을 제공합니다.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: '빠른 매칭 속도',
      description: '기존 4-6주 소요되던 매칭 프로세스를 15분으로 단축했습니다.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: '안전한 계약',
      description: '법률 전문가가 검토한 표준 계약서로 안전한 협찬 계약을 보장합니다.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: 'ROI 분석',
      description: '실시간 데이터 분석으로 협찬 효과를 정확하게 측정합니다.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              브랜드와 행사의<br />새로운 연결 방식
            </h1>
            <p className="text-xl text-blue-100">
              BrandMatchers는 AI 기술을 활용하여<br />
              브랜드와 행사를 효과적으로 연결하는<br />
              혁신적인 협찬 매칭 플랫폼입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">왜 BrandMatchers인가?</h2>
            <p className="text-xl text-gray-600">
              국내 협찬 시장의 비효율성과 프로세스 부재로 인한<br />
              시간 낭비와 미스매칭 문제를 해결합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">기존 협찬 시장의 문제점</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  협찬 계약 성사까지 평균 4-6주 소요
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  효율적인 매칭 시스템 부재
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  협찬 효과 검증 시스템 부족
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">BrandMatchers의 솔루션</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  AI 기반 15분 매칭 시스템
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  30개 이상 데이터 변수 기반 분석
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  실시간 ROI 측정 및 성과 분석
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">주요 기능</h2>
            <p className="text-xl text-gray-600">
              혁신적인 기술로 새로운 협찬 경험을 제공합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">협찬 진행 프로세스</h2>
            <p className="text-xl text-gray-600">
              간단한 4단계로 협찬을 시작하세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: '프로필 등록', description: '행사 정보와 희망하는 협찬 조건을 등록합니다.' },
              { step: '02', title: 'AI 매칭', description: 'AI가 최적의 브랜드를 추천해드립니다.' },
              { step: '03', title: '제안 및 협의', description: '맞춤형 제안서를 작성하고 협의를 진행합니다.' },
              { step: '04', title: '계약 체결', description: '온라인으로 간편하게 계약을 체결합니다.' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            지금 바로 시작하세요
          </h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              행사 등록하기
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              브랜드 찾아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;