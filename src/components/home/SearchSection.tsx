import React, { useState } from 'react';
import { Building2, Calendar, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAIRecommendations } from '../../lib/openai';

function SearchSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventType: '',
    attendees: '',
    loading: false,
    error: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, loading: true, error: null }));

    try {
      const recommendations = await getAIRecommendations({
        eventType: formData.eventType,
        attendees: formData.attendees
      });

      navigate('/sponsors', { 
        state: { 
          eventType: formData.eventType,
          attendees: formData.attendees,
          aiRecommendations: recommendations
        }
      });
    } catch (error) {
      setFormData(prev => ({ 
        ...prev, 
        error: '브랜드 추천을 가져오는 중 오류가 발생했습니다. 다시 시도해주세요.' 
      }));
    } finally {
      setFormData(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div id="search-section" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI 기술로 실현하는<br />
            스마트한 브랜드 매칭
          </h2>
          <p className="text-xl text-gray-600">
            빅데이터와 AI 알고리즘으로<br />
            행사와 브랜드 간의 최적의 매칭을 찾아드립니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI 데이터 분석</h3>
                <p className="text-gray-600">30개 이상의 데이터 변수를 AI가 실시간으로 분석하여 최적의 매칭을 도출합니다.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">정확한 예측</h3>
                <p className="text-gray-600">머신러닝 기반의 예측 모델로 협찬 성공률과 ROI를 정확하게 분석합니다.</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">행사 유형</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.eventType}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="conference">컨퍼런스/세미나</option>
                  <option value="exhibition">전시회/박람회</option>
                  <option value="performance">공연/페스티벌</option>
                  <option value="sports">스포츠/레저</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">예상 참가자 수</label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.attendees}
                  onChange={(e) => setFormData(prev => ({ ...prev, attendees: e.target.value }))}
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="100">100명 미만</option>
                  <option value="500">100-500명</option>
                  <option value="1000">500-1000명</option>
                  <option value="1000+">1000명 이상</option>
                </select>
              </div>
              {formData.error && (
                <div className="text-red-600 text-sm">{formData.error}</div>
              )}
              <button 
                type="submit"
                disabled={formData.loading}
                className={`w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors ${
                  formData.loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {formData.loading ? 'AI 분석중...' : 'AI 매칭 시작하기'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;