import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, MessageSquare } from 'lucide-react';

function Header() {
  return (
    <header className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4" />
            <Link to="/" className="text-xl font-bold">BrandMatchers</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/sponsors" className="text-gray-900 hover:text-gray-600">브랜드 찾기</Link>
            <Link to="/events/register" className="text-gray-900 hover:text-gray-600">행사 등록</Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600">서비스 소개</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-500" />
            <MessageSquare className="h-5 w-5 text-gray-500" />
            <button className="text-sm text-gray-600">로그인 / 회원가입</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">기업 서비스</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;