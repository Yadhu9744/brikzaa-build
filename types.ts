// FIX: Import React to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface Material {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Worker {
  id: string;
  serviceId: string;
  name:string;
  experience: number; // in years
  location: string;
  phone: string;
  avatar: string;
  specialties: string[];
}
