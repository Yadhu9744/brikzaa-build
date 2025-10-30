// FIX: Import React to resolve 'Cannot find namespace "React"' error.
import React from 'react';

export interface TechnicalSpecs {
  [key: string]: string | number;
}

export interface Company {
  id: string;
  name: string;
  logo: string; // logo url
  location?: string;
  contact?: string;
  website?: string;
  rating?: number;
  materialsSupplied?: string[]; // material ids this company supplies e.g. ['cement','steel']
}

export interface Material {
  id: string;
  name: string;
  description: string;
  priceRange: string;
  image: string;
  gallery?: string[];
  category: string;
  unit: string;
  suppliers?: Supplier[];
  ratings: number;
  availability: string;
  technicalSpecs: TechnicalSpecs;
  usageTips: string;
  specifications?: string[];
  contactInfo?: ContactInfo;

}
export interface Supplier {
  id: string;
  name: string;
  logo: string;
  pricePerUnit: string;
  deliveryTime: string;
  rating: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  website?: string;
}

export interface Service {
    
  id: string;
  name: string;
  description: string;
  imageUrl: string;
 bio?: string;
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
  bio?: string;
  projects?: string[];
  reviews?: { name: string; text: string }[];
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
