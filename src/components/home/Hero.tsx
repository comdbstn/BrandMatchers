import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const scrollToSearch = () => {
    const searchSection = document.getElementById('search-section');
    searchSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="AI Technology Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold mb-8">
          AI 기술로 실현하는<br />최적의 브랜드 협찬
        </h1>
        <p className="text-xl mb-12 text-gray-200">
          30개 이상의 데이터 포인트를 AI가 분석하여<br />
          최적의 브랜드-행사 매칭을 15분 안에 제공하는<br />
          No.1 AI 기반 협찬 매칭 플랫폼
        </p>
        <div className="flex justify-center space-x-6">
          <button 
            onClick={scrollToSearch}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            AI 매칭 시작하기
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            서비스 소개
          </button>
        </div>
      </div>
      <div 
        onClick={scrollToSearch}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="animate-bounce">
          <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
        </div>
      </div>
    </div>
  );
}

export default Hero;