import type { Company } from '../../types';


export const companies: Company[] = [
  // 🧱 Cement companies
  {
    id: 'c_a1',
    name: 'Apex Cement Co.',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu3o01a2Ejq4XDix42hYPFk03MbnGYwob15Q&s',
    location: 'Mumbai',
    website: 'https://apexcement.example',
    rating: 4.6,
    materialsSupplied: ['cement']
  },
  {
    id: 'c_a2',
    name: 'UltraCem Pvt Ltd',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjePy6CWyGKPiJL6ZWosrTRUS34rwR8fYBfA&s',
    location: 'Chennai',
    website: 'https://ultracem.example',
    rating: 4.7,
    materialsSupplied: ['cement']
  },
  {
    id: 'c_a3',
    name: 'GreenBind Cement',
    logo: 'https://mma.prnewswire.com/media/1594689/GreenCement_Logo3B_PDF_Logo.jpg',
    location: 'Bengaluru',
    website: 'https://greenbind.example',
    rating: 4.4,
    materialsSupplied: ['cement']
  },

  // 🏖️ Sand / Aggregates companies
  {
    id: 's_a1',
    name: 'RiverStone Supplies',
    logo: 'https://www.shutterstock.com/shutterstock/photos/1351796927/display_1500/stock-vector-river-and-stone-logo-design-1351796927.jpg',
    location: 'Kochi',
    website: 'https://riverstone.example',
    rating: 4.5,
    materialsSupplied: ['sand']
  },
  {
    id: 's_a2',
    name: 'BlueSand Traders',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2aO0VCRlUAknL7eZ-TJNSdzxEoNZEsqtiP1oeMMesPFnTGSnWu0MURM9aGXFfnlQ-NM&usqp=CAU',
    location: 'Hyderabad',
    website: 'https://bluesand.example',
    rating: 4.2,
    materialsSupplied: ['sand']
  },
  {
    id: 's_a3',
    name: 'Granulite Aggregates',
    logo: 'https://media.zenfs.com/en/us.finance.gurufocus/6f8272ab12873fc73a6f812bbfe671d3',
    location: 'Pune',
    website: 'https://granulite.example',
    rating: 4.3,
    materialsSupplied: ['sand']
  },

  // 🔩 Steel companies
  {
    id: 'st_a1',
    name: 'SteelCorp Ltd',
    logo: 'https://pbs.twimg.com/profile_images/1265077442886000640/INAjJbQ__400x400.jpg',
    location: 'Surat',
    website: 'https://steelcorp.example',
    rating: 4.8,
    materialsSupplied: ['steel']
  },
  {
    id: 'st_a2',
    name: 'IronWorks Pvt',
    logo: 'https://yt3.googleusercontent.com/ytc/AIdro_mGKOhbehjxLmng0Q45HnntScxWWwa1wDZKlaa0Bv0hLA=s900-c-k-c0x00ffffff-no-rj',
    location: 'Vadodara',
    website: 'https://ironworks.example',
    rating: 4.5,
    materialsSupplied: ['steel']
  },
  {
    id: 'st_a3',
    name: 'MegaMetal Co.',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHurPWKkiR7bw/company-logo_200_200/company-logo_200_200/0/1700649569006?e=2147483647&v=beta&t=uW1t9f-mOZGDD8NdpbCtuybIsy8LG_IV5Dym02QoG0w',
    location: 'Rourkela',
    website: 'https://megametal.example',
    rating: 4.4,
    materialsSupplied: ['steel']
  },

  // 🧱 Bricks companies
  {
    id: 'b_a1',
    name: 'BrickMasters Co.',
    logo: 'https://img1.wsimg.com/isteam/ip/32c8a1f5-cfac-4e38-8fe7-67852071a4c7/Logo%20Big.png',
    location: 'Kolkata',
    website: 'https://brickmasters.example',
    rating: 4.3,
    materialsSupplied: ['bricks']
  },
  {
    id: 'b_a2',
    name: 'ClayWorks Ltd',
    logo: 'https://static1.squarespace.com/static/5a3a779318b27de332e70966/t/6661be516506f8625d4c14e2/1759256757082/',
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
    logo: 'https://play-lh.googleusercontent.com/nWtWwhmihZDUtKnYSTR3FI4q4g2SyhfnJJSIauAntMDaWKsub0aq7ghuiBu1cIUmcYMTL-s4JtEzt_FIECy1',
    location: 'Delhi',
    website: 'https://buildpro.example',
    rating: 4.5,
    materialsSupplied: ['sand', 'cement', 'bricks']
  },
  {
    id: 'mix2',
    name: 'AllMaterials Hub',
    logo: 'https://www.logoai.com/uploads/output/2023/04/28/075e65f4e6419513108931682b7fffab.jpg',
    location: 'Ahmedabad',
    website: 'https://allmat.example',
    rating: 4.2,
    materialsSupplied: ['cement', 'steel', 'metal', 'fibers', 'electronics']
  }
];
