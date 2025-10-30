import React, { useEffect, useRef } from 'react';
import { CompanyCard } from './CompanyCard';
import type { Company } from '../types';

interface Props {
  companies: Company[];
  visibleCards?: number;
  autoPlayInterval?: number;
  speed?: number;
}

export const CompanyCarousel: React.FC<Props> = ({
  companies,
  visibleCards = 4,
  autoPlayInterval = 3000,
  speed = 0.5,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPos = 0;

    const scroll = () => {
      scrollPos += speed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollPos = 0;
      } else {
        scrollContainer.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [companies, speed]);

  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedCompanies.map((company, index) => (
          <CompanyCard key={`${company.id}-${index}`} company={company} />
        ))}
      </div>
    </div>
  );
};
