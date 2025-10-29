import type { Company } from '../../types';


export const companies: Company[] = [
  // 🧱 Cement companies
  {
    id: 'c_a1',
    name: 'Apex Cement Co.',
    logo: 'https://picsum.photos/seed/apex/120/120',
    location: 'Mumbai',
    website: 'https://apexcement.example',
    rating: 4.6,
    materialsSupplied: ['cement']
  },
  {
    id: 'c_a2',
    name: 'UltraCem Pvt Ltd',
    logo: 'https://picsum.photos/seed/ultracem/120/120',
    location: 'Chennai',
    website: 'https://ultracem.example',
    rating: 4.7,
    materialsSupplied: ['cement']
  },
  {
    id: 'c_a3',
    name: 'GreenBind Cement',
    logo: 'https://picsum.photos/seed/greenbind/120/120',
    location: 'Bengaluru',
    website: 'https://greenbind.example',
    rating: 4.4,
    materialsSupplied: ['cement']
  },

  // 🏖️ Sand / Aggregates companies
  {
    id: 's_a1',
    name: 'RiverStone Supplies',
    logo: 'https://picsum.photos/seed/riverstone/120/120',
    location: 'Kochi',
    website: 'https://riverstone.example',
    rating: 4.5,
    materialsSupplied: ['sand']
  },
  {
    id: 's_a2',
    name: 'BlueSand Traders',
    logo: 'https://picsum.photos/seed/bluesand/120/120',
    location: 'Hyderabad',
    website: 'https://bluesand.example',
    rating: 4.2,
    materialsSupplied: ['sand']
  },
  {
    id: 's_a3',
    name: 'Granulite Aggregates',
    logo: 'https://picsum.photos/seed/granulite/120/120',
    location: 'Pune',
    website: 'https://granulite.example',
    rating: 4.3,
    materialsSupplied: ['sand']
  },

  // 🔩 Steel companies
  {
    id: 'st_a1',
    name: 'SteelCorp Ltd',
    logo: 'https://picsum.photos/seed/steelcorp/120/120',
    location: 'Surat',
    website: 'https://steelcorp.example',
    rating: 4.8,
    materialsSupplied: ['steel']
  },
  {
    id: 'st_a2',
    name: 'IronWorks Pvt',
    logo: 'https://picsum.photos/seed/ironworks/120/120',
    location: 'Vadodara',
    website: 'https://ironworks.example',
    rating: 4.5,
    materialsSupplied: ['steel']
  },
  {
    id: 'st_a3',
    name: 'MegaMetal Co.',
    logo: 'https://picsum.photos/seed/megametal/120/120',
    location: 'Rourkela',
    website: 'https://megametal.example',
    rating: 4.4,
    materialsSupplied: ['steel']
  },

  // 🧱 Bricks companies
  {
    id: 'b_a1',
    name: 'BrickMasters Co.',
    logo: 'https://picsum.photos/seed/brickmasters/120/120',
    location: 'Kolkata',
    website: 'https://brickmasters.example',
    rating: 4.3,
    materialsSupplied: ['bricks']
  },
  {
    id: 'b_a2',
    name: 'ClayWorks Ltd',
    logo: 'https://picsum.photos/seed/clayworks/120/120',
    location: 'Lucknow',
    website: 'https://clayworks.example',
    rating: 4.1,
    materialsSupplied: ['bricks']
  },

  // ⚙️ Metal suppliers
  {
    id: 'm1',
    name: 'IronTech Metals',
    logo: 'https://picsum.photos/seed/irontech/120/120',
    location: 'Jamshedpur',
    website: 'https://irontech.example',
    rating: 4.7,
    materialsSupplied: ['metal']
  },
  {
    id: 'm2',
    name: 'Galaxy Metals Pvt Ltd',
    logo: 'https://picsum.photos/seed/galaxymetals/120/120',
    location: 'Delhi',
    website: 'https://galaxymetals.example',
    rating: 4.5,
    materialsSupplied: ['metal']
  },
  {
    id: 'm3',
    name: 'Vulcan Steel & Metalworks',
    logo: 'https://picsum.photos/seed/vulcan/120/120',
    location: 'Bhilai',
    website: 'https://vulcanmetal.example',
    rating: 4.6,
    materialsSupplied: ['metal']
  },

  // 🧵 Fiber suppliers
  {
    id: 'f1',
    name: 'FiberGrid Solutions',
    logo: 'https://picsum.photos/seed/fibergrid/120/120',
    location: 'Coimbatore',
    website: 'https://fibergrid.example',
    rating: 4.6,
    materialsSupplied: ['fibers']
  },
  {
    id: 'f2',
    name: 'ReinforceTech Fibers',
    logo: 'https://picsum.photos/seed/reinforce/120/120',
    location: 'Pune',
    website: 'https://reinforcetech.example',
    rating: 4.5,
    materialsSupplied: ['fibers']
  },
  {
    id: 'f3',
    name: 'GlassMat Industries',
    logo: 'https://picsum.photos/seed/glassmat/120/120',
    location: 'Ahmedabad',
    website: 'https://glassmat.example',
    rating: 4.4,
    materialsSupplied: ['fibers']
  },

  // ⚡ Electronics / Electricals
  {
    id: 'e1',
    name: 'VoltLine Electric Co.',
    logo: 'https://picsum.photos/seed/voltline/120/120',
    location: 'Bangalore',
    website: 'https://voltline.example',
    rating: 4.8,
    materialsSupplied: ['electronics']
  },
  {
    id: 'e2',
    name: 'SparkTech Components',
    logo: 'https://picsum.photos/seed/sparktech/120/120',
    location: 'Hyderabad',
    website: 'https://sparktech.example',
    rating: 4.6,
    materialsSupplied: ['electronics']
  },
  {
    id: 'e3',
    name: 'ElectroBuild Supplies',
    logo: 'https://picsum.photos/seed/electrobuild/120/120',
    location: 'Chandigarh',
    website: 'https://electrobuild.example',
    rating: 4.5,
    materialsSupplied: ['electronics']
  },

  // 🏗️ Mixed suppliers (multi-material)
  {
    id: 'mix1',
    name: 'BuildPro Suppliers',
    logo: 'https://picsum.photos/seed/buildpro/120/120',
    location: 'Delhi',
    website: 'https://buildpro.example',
    rating: 4.5,
    materialsSupplied: ['sand', 'cement', 'bricks']
  },
  {
    id: 'mix2',
    name: 'AllMaterials Hub',
    logo: 'https://picsum.photos/seed/allmat/120/120',
    location: 'Ahmedabad',
    website: 'https://allmat.example',
    rating: 4.2,
    materialsSupplied: ['cement', 'steel', 'metal', 'fibers', 'electronics']
  }
];
