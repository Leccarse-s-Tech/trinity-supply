import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { DifferentialsSection } from '../components/DifferentialsSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { LocationSection } from '../components/LocationSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <DifferentialsSection />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
};
