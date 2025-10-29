
import React, { useState, useMemo } from 'react';
import { materials } from '../data';
import { MaterialCard } from '../components/Cards';
import type { Material } from '../types';

const MaterialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMaterials = useMemo(() => {
    return materials.filter(material =>
      material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Construction Materials</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Find the right materials for your next project.</p>
        <div className="mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for materials (e.g., sand, cement)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      {filteredMaterials.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredMaterials.map((material: Material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-slate-500 dark:text-slate-400">No materials found for "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
};

export default MaterialsPage;
