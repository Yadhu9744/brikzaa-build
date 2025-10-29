import type {  Service } from '../../types';
import { HammerIcon, WrenchIcon, BoltIcon, PaintBrushIcon, HardHatIcon } from '../../components/Icons';


export const services: Service[] = [
  { id: 'plumber', name: 'Plumber', description: 'Expert plumbing installation and repair services.', icon: WrenchIcon },
  { id: 'electrician', name: 'Electrician', description: 'Certified electrical wiring and fixture installation.', icon: BoltIcon },
  { id: 'mason', name: 'Mason', description: 'Skilled masonry for brickwork and concrete.', icon: HardHatIcon },
  { id: 'carpenter', name: 'Carpenter', description: 'Custom carpentry for framing and finishing.', icon: HammerIcon },
  { id: 'painter', name: 'Painter', description: 'Professional interior and exterior painting.', icon: PaintBrushIcon },
];