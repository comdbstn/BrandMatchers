import React from 'react';

function PartnerSection() {
  const partners = [
    { name: '삼성전자', logo: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: '현대자동차', logo: 'https://images.unsplash.com/photo-1551150441-3f3828204ef0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'LG전자', logo: 'https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'SK텔레콤', logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: '네이버', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: '카카오', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          신뢰할 수 있는 파트너사
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;