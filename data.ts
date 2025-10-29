
import type { Material, Service, Worker } from './types';
import { HammerIcon, WrenchIcon, BoltIcon, PaintBrushIcon, HardHatIcon } from './components/Icons';

export const materials: Material[] = [
  { id: 'sand', name: 'Sand', description: 'High-quality river sand for all construction purposes.', priceRange: '$20 - $30 / ton', image: 'https://picsum.photos/seed/sand/400/300' },
  { id: 'cement', name: 'Cement', description: 'Portland cement for strong and durable concrete.', priceRange: '$10 - $15 / bag', image: 'https://picsum.photos/seed/cement/400/300' },
  { id: 'steel', name: 'Steel Rods', description: 'Reinforced steel rods for structural integrity.', priceRange: '$500 - $700 / ton', image: 'https://picsum.photos/seed/steel/400/300' },
  { id: 'bricks', name: 'Bricks', description: 'Clay bricks for walling and paving.', priceRange: '$0.50 - $1.00 / brick', image: 'https://picsum.photos/seed/bricks/400/300' },
];

export const services: Service[] = [
  { id: 'plumber', name: 'Plumber', description: 'Expert plumbing installation and repair services.', icon: WrenchIcon },
  { id: 'electrician', name: 'Electrician', description: 'Certified electrical wiring and fixture installation.', icon: BoltIcon },
  { id: 'mason', name: 'Mason', description: 'Skilled masonry for brickwork and concrete.', icon: HardHatIcon },
  { id: 'carpenter', name: 'Carpenter', description: 'Custom carpentry for framing and finishing.', icon: HammerIcon },
  { id: 'painter', name: 'Painter', description: 'Professional interior and exterior painting.', icon: PaintBrushIcon },
];

export const workers: Worker[] = [
  // Plumbers
  { id: 'p1', serviceId: 'plumber', name: 'John Doe', experience: 15, location: 'New York, NY', phone: '123-456-7890', avatar: 'https://picsum.photos/seed/john/100', specialties: ['Residential Plumbing', 'Drain Cleaning', 'Water Heaters'] },
  { id: 'p2', serviceId: 'plumber', name: 'Jane Smith', experience: 8, location: 'Brooklyn, NY', phone: '234-567-8901', avatar: 'https://picsum.photos/seed/jane/100', specialties: ['Commercial Plumbing', 'Pipe Fitting'] },
  // Electricians
  { id: 'e1', serviceId: 'electrician', name: 'Mike Johnson', experience: 20, location: 'Queens, NY', phone: '345-678-9012', avatar: 'https://picsum.photos/seed/mike/100', specialties: ['Wiring and Rewiring', 'Panel Upgrades', 'Lighting Installation'] },
  { id: 'e2', serviceId: 'electrician', name: 'Sarah Davis', experience: 12, location: 'New York, NY', phone: '456-789-0123', avatar: 'https://picsum.photos/seed/sarah/100', specialties: ['Smart Home Automation', 'Security Systems'] },
  // Masons
  { id: 'm1', serviceId: 'mason', name: 'Chris Lee', experience: 25, location: 'Bronx, NY', phone: '567-890-1234', avatar: 'https://picsum.photos/seed/chris/100', specialties: ['Bricklaying', 'Stone Masonry', 'Concrete Foundations'] },
  // Carpenters
  { id: 'c1', serviceId: 'carpenter', name: 'David Brown', experience: 18, location: 'Staten Island, NY', phone: '678-901-2345', avatar: 'https://picsum.photos/seed/david/100', specialties: ['Framing', 'Finish Carpentry', 'Custom Cabinets'] },
   // Painters
  { id: 'pa1', serviceId: 'painter', name: 'Emily White', experience: 10, location: 'New York, NY', phone: '789-012-3456', avatar: 'https://picsum.photos/seed/emily/100', specialties: ['Interior Painting', 'Exterior Painting', 'Faux Finishes'] },
];
