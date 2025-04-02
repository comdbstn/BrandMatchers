import React from 'react';
import { 
  Hero, 
  SearchSection, 
  TeamSection,
  PartnerSection,
  TestimonialSection 
} from '../components/home';

function Home() {
  return (
    <main>
      <Hero />
      <SearchSection />
      <TeamSection />
      <PartnerSection />
      <TestimonialSection />
    </main>
  );
}

export default Home;