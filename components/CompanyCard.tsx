// components/CompanyCard.tsx
import React from 'react';
import type { Company } from '../types';

interface Props {
  company: Company;
}

export const CompanyCard: React.FC<Props> = ({ company }) => {
  return (
    <div className="min-w-[320px] max-w-[340px] bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-5 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
      {/* Left logo */}
      <div className="flex-shrink-0">
        <img
          src={company.logo}
          alt={company.name}
          className="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
        />
      </div>

      {/* Right details */}
      <div className="flex flex-col justify-center">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{company.name}</h4>
        {company.location && (
          <p className="text-sm text-slate-500 dark:text-slate-400">{company.location}</p>
        )}
        {company.rating && (
          <p className="text-sm mt-1 text-yellow-600">{company.rating} ⭐</p>
        )}
        <a
          href={company.website ?? '#'}
          target="_blank"
          rel="noreferrer"
          className="text-xs mt-2 text-blue-600 hover:underline"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};
