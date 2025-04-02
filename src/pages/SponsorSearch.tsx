import React, { useState, useEffect } from 'react';
import { Search, Filter, ArrowRight, Users, Calendar, DollarSign, Zap } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAIRecommendations } from '../lib/openai';

function SponsorSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [filteredSponsors, setFilteredSponsors] = useState([]);
  const [aiRecommendations, setAiRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);

  const sponsors = [
    {
      name: '삼성전자',
      category: 'IT/전자',
      budget: '5000만원 이상',
      description: '혁신적인 기술과 함께하는 미래지향적인 행사를 찾습니다.',
      image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      stats: {
        events: 120,
        avgBudget: '3000만원',
        successRate: '95%'
      }
    },
    {
      name: '아디다스 코리아',
      category: '스포츠/패션',
      budget: '3000만원 이상',
      description: '스포츠와 라이프스타일 분야의 혁신적인 행사를 후원합니다.',
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      stats: {
        events: 85,
        avgBudget: '2000만원',
        successRate: '92%'
      }
    },
    {
      name: '네이버',
      category: 'IT/인터넷',
      budget: '1억원 이상',
      description: '디지털 혁신과 기술 컨퍼런스를 중점적으로 후원합니다.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      stats: {
        events: 150,
        avgBudget: '5000만원',
        successRate: '97%'
      }
    }
  ];

  useEffect(() => {
    const fetchAIRecommendations = async () => {
      if (location.state?.eventType && location.state?.attendees) {
        setLoading(true);
        try {
          const recommendations = await getAIRecommendations({
            eventType: location.state.eventType,
            attendees: location.state.attendees
          });
          setAiRecommendations(recommendations);
        } catch (error) {
          console.error('AI 추천 오류:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAIRecommendations();
  }, [location.state]);

  useEffect(() => {
    let filtered = [...sponsors];

    if (searchQuery) {
      filtered = filtered.filter(sponsor => 
        sponsor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sponsor.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedIndustry) {
      filtered = filtered.filter(sponsor => sponsor.category === selectedIndustry);
    }

    if (selectedBudget) {
      filtered = filtered.filter(sponsor => sponsor.budget.includes(selectedBudget));
    }

    setFilteredSponsors(filtered);
  }, [searchQuery, selectedIndustry, selectedBudget]);

  const handleProposal = (sponsor) => {
    navigate('/events/register', { 
      state: { 
        selectedSponsor: sponsor.name 
      }
    });
  };

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">브랜드 찾기</h1>
          <p className="text-xl text-gray-600">AI 매칭 시스템으로 최적의 협찬 브랜드를 찾아보세요</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">AI가 최적의 브랜드를 분석중입니다...</p>
          </div>
        ) : aiRecommendations?.recommendations ? (
          <div className="mb-12">
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-blue-900">AI 추천 브랜드</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiRecommendations.recommendations.map((rec, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{rec.brandName}</h3>
                        <p className="text-sm text-gray-500">{rec.industry}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        매칭 점수: {rec.matchScore}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{rec.reason}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500">예상 예산</p>
                        <p className="font-semibold">{rec.estimatedBudget}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="text-gray-500">예상 성공률</p>
                        <p className="font-semibold">{rec.successRate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="브랜드명 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <select 
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">업종 선택</option>
                <option value="IT/전자">IT/전자</option>
                <option value="스포츠/패션">패션/뷰티</option>
                <option value="IT/인터넷">IT/인터넷</option>
              </select>
            </div>
            <div>
              <select 
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">예산 범위</option>
                <option value="1000만원">1000만원 미만</option>
                <option value="3000만원">1000-3000만원</option>
                <option value="5000만원">3000만원 이상</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              검색하기
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(filteredSponsors.length > 0 ? filteredSponsors : sponsors).map((sponsor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                    <p className="text-sm text-gray-500">{sponsor.category}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {sponsor.budget}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{sponsor.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-gray-500">진행 행사</div>
                    <div className="font-semibold">{sponsor.stats.events}건</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">평균 예산</div>
                    <div className="font-semibold">{sponsor.stats.avgBudget}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500">성사율</div>
                    <div className="font-semibold">{sponsor.stats.successRate}</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleProposal(sponsor)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  제안서 보내기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SponsorSearch;