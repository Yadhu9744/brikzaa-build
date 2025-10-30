import  { Material } from '../../types';


export const materials: Material[] = [
  {
    id: 'sand',
    name: 'Sand',
    description: 'High-quality river sand suitable for concrete, plastering, and leveling.',
    priceRange: '$20 - $30 / ton',
    image: 'https://media.istockphoto.com/id/594942902/photo/sand-running-through-fingers.jpg?s=612x612&w=0&k=20&c=tIJriPncFbYTrXoZxKOwrg86qTf8YUUXTw6rq1MSdUs=',
    gallery: [
      'https://5.imimg.com/data5/QY/AI/MY-39676806/fine-sand.jpg',
      'https://d2j6dbq0eux0bg.cloudfront.net/images/87158104/3693608156.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjFGweN_AdHdc9WTXxmJpnpE_Lat_4x-DF4FzeZZhbN3tPo9VigYCXXuI63kvAxeOxZc&usqp=CAU'
    ],
    category: 'Aggregates',
    unit: 'ton',
    specifications: [
      'Type: Fine River Sand',
      'Moisture Content: < 3%',
      'Silt Content: < 8%',
      'Usage: Concrete, Plastering, Flooring'
    ],
    suppliers: [
      { id: 's1', name: 'Apollo Builders', logo: 'https://picsum.photos/seed/apollo/80', pricePerUnit: '$25 / ton', deliveryTime: '2-3 days', rating: 4.7 },
      { id: 's2', name: 'MegaMix Construction', logo: 'https://picsum.photos/seed/mega/80', pricePerUnit: '$22 / ton', deliveryTime: '1-2 days', rating: 4.5 }
    ],
    contactInfo: {
      phone: '+1 (234) 567-890',
      email: 'sales@apollobuilders.com',
      address: '123 Builder Street, New York, USA',
      website: 'https://apollobuilders.com'
    },
    ratings: 4.5,
    availability: 'In Stock',
    technicalSpecs: { finenessModulus: 2.6, moistureContent: '1-2%', siltContent: 'Below 5%' },
    usageTips: 'Wash before use for plastering to remove impurities. Ideal for concrete mixes.'
  },
  {
    id: 'cement',
    name: 'Cement',
    description: 'Portland cement for strong and durable concrete.',
    priceRange: '$10 - $15 / bag',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXkbAE4Lz8hpD3ksW8kgpwrMjkMoPi12IuA&s',
    gallery: [
      'https://lirp.cdn-website.com/bc4439fa/dms3rep/multi/opt/Portland+Cement-1920w.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzViSTXkUzRHEG0fOVnM87Clb1lmgNRPB-Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvKfsq3r4aNEDlwr0fcsY6KfeGSdpiASkPw&s'
    ],
    category: 'Binders',
    unit: 'bag',
    specifications: [
      'Type: OPC 43 Grade',
      'Packing Size: 50 kg',
      'Setting Time: 30 mins',
      'Compressive Strength: 43 MPa'
    ],
    suppliers: [
      { id: 'c1', name: 'UltraBuild Cement Co.', logo: 'https://picsum.photos/seed/ultra/80', pricePerUnit: '$12 / bag', deliveryTime: '1 day', rating: 4.8 },
      { id: 'c2', name: 'StarMix Industries', logo: 'https://picsum.photos/seed/star/80', pricePerUnit: '$13 / bag', deliveryTime: '2 days', rating: 4.6 }
    ],
    contactInfo: {
      phone: '+1 (987) 654-3210',
      email: 'contact@ultrabuild.com',
      address: '56 Industrial Park, Brooklyn, NY',
      website: 'https://ultrabuild.com'
    },
    ratings: 4.7,
    availability: 'Limited Stock',
    technicalSpecs: { type: 'OPC 43 Grade', settingTime: 'Initial: 45 mins, Final: 10 hrs', compressiveStrength: '43 MPa' },
    usageTips: 'Store in a dry place. Use within 3 months of manufacturing for best results.'
  },
  {
    id: 'steel',
    name: 'Steel Rods',
    description: 'Reinforced steel rods for structural integrity.',
    priceRange: '$500 - $700 / ton',
    image: 'https://www.deltaware.in/images/blog/steel/steel-products_hu2b83ef01bc28c582fb8b6ae62a9962f1_189150_800x600_resize_q100_box.jpg',
    gallery: [
      'https://www.jkcement.com/wp-content/uploads/2024/10/cylindrical-steel-pipe-scaled.jpg',
      'https://waykenrm.com/wp-content/uploads/2022/02/mild-steel-optimized.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsbzP75lDVKiOrGMe6Vz0dtPfCKZ03RRNsQ&s'
    ],
    category: 'Reinforcement',
    unit: 'ton',
    specifications: [
      'Type: Fe 500D TMT Rods',
      'Diameter: 8mm - 32mm',
      'Yield Strength: 500 MPa',
      'Usage: RCC Structures'
    ],
    suppliers: [
      { id: 'st1', name: 'Tata Steel', logo: 'https://picsum.photos/seed/tata/80', pricePerUnit: '$680 / ton', deliveryTime: '3 days', rating: 4.9 },
      { id: 'st2', name: 'JSW Steel', logo: 'https://picsum.photos/seed/jsw/80', pricePerUnit: '$650 / ton', deliveryTime: '2 days', rating: 4.7 }
    ],
    contactInfo: {
      phone: '+1 (555) 123-4567',
      email: 'info@tatasteel.com',
      address: 'Tata Industrial Estate, NY',
      website: 'https://tatasteel.com'
    },
    ratings: 4.8,
    availability: 'In Stock',
    technicalSpecs: { grade: 'Fe500', tensileStrength: '500 MPa', diameterRange: '8mm - 32mm' },
    usageTips: 'Store under cover to avoid rusting. Use for beams, columns, and slabs.'
  },
  {
    id: 'bricks',
    name: 'Clay Bricks',
    description: 'Durable red clay bricks for wall construction.',
    priceRange: '$0.5 - $1 / piece',
    image: 'https://www.bharatbricks.com/wp-content/uploads/2023/02/clay-brick-1.jpg',
    gallery: [
      'https://img500.exportersindia.com/product_images/bc-500/2023/2/11702608/lightweight-red-clay-bricks-1676886682-6770810.jpeg',
      'https://cdn.pixabay.com/photo/2014/02/22/18/54/brick-laying-272216_960_720.jpg',
      'https://cmqconsulting.com/wp-content/uploads/2021/09/esteban-castle-sx3NFETMczI-unsplash.jpg'
      
    ],
    category: 'Masonry',
    unit: 'piece',
    specifications: [
      'Type: Burnt Clay Brick',
      'Size: 190 x 90 x 90 mm',
      'Compressive Strength: 10.5 MPa'
    ],
    suppliers: [
      { id: 'b1', name: 'EcoBrick Supplies', logo: 'https://picsum.photos/seed/eco/80', pricePerUnit: '$0.6 / piece', deliveryTime: '2 days', rating: 4.5 }
    ],
    contactInfo: {
      phone: '+1 (444) 987-1111',
      email: 'info@ecobrick.com',
      address: '23 Brick Road, NY',
      website: 'https://ecobrick.com'
    },
    ratings: 4.4,
    availability: 'In Stock',
    technicalSpecs: { compressiveStrength: '10.5 MPa', waterAbsorption: '15%' },
    usageTips: 'Soak in water before use to improve bonding with mortar.'
  },
  {
    id: 'tiles',
    name: 'Floor Tiles',
    description: 'Ceramic floor tiles for residential and commercial spaces.',
    priceRange: '$8 - $15 / sq.ft',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_mkys57xW20YhQ8aEYCYwEw4uaowoPQlJQ&s',
    gallery: [
      'https://www.porcelaintiles.in/includes/blog/floor-tiles-for-outdoor/swimming-pool.jpg',
      'https://4.imimg.com/data4/VS/QF/MY-3890292/teak-deck-tile-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2023/4/302071495/KX/MZ/DO/8044350/teak-deck-tile-250x250.jpg'
    ],
    category: 'Finishing',
    unit: 'sq.ft',
    specifications: [
      'Material: Ceramic',
      'Finish: Glossy / Matte',
      'Size: 2x2 ft'
    ],
    suppliers: [
      { id: 't1', name: 'Kajaria Ceramics', logo: 'https://picsum.photos/seed/kajaria/80', pricePerUnit: '$12 / sq.ft', deliveryTime: '3 days', rating: 4.8 }
    ],
    contactInfo: {
      phone: '+1 (555) 888-2222',
      email: 'sales@kajaria.com',
      address: 'Tile City, NY',
      website: 'https://kajaria.com'
    },
    ratings: 4.7,
    availability: 'In Stock',
    technicalSpecs: { thickness: '10 mm', waterAbsorption: '<0.5%' },
    usageTips: 'Use tile spacers for uniform gaps. Apply sealant after installation.'
  },
  {
    id: 'paint',
    name: 'Interior Paint',
    description: 'Premium washable wall paint with low VOC formula.',
    priceRange: '$40 - $60 / gallon',
    image: 'https://picsum.photos/seed/paint-main/600/400',
    gallery: [
      'https://picsum.photos/seed/paint1/600/400',
      'https://picsum.photos/seed/paint2/600/400'
    ],
    category: 'Finishing',
    unit: 'gallon',
    specifications: [
      'Type: Acrylic Emulsion',
      'Finish: Satin / Matte',
      'Coverage: 350 sq.ft / gallon'
    ],
    suppliers: [
      { id: 'p1', name: 'Asian Paints', logo: 'https://picsum.photos/seed/asian/80', pricePerUnit: '$55 / gallon', deliveryTime: '2 days', rating: 4.8 }
    ],
    contactInfo: {
      phone: '+1 (333) 222-3333',
      email: 'support@asianpaints.com',
      address: 'Paint Hub, NY',
      website: 'https://asianpaints.com'
    },
    ratings: 4.9,
    availability: 'In Stock',
    technicalSpecs: { coverage: '350 sq.ft/gallon', dryingTime: '30 mins' },
    usageTips: 'Apply two coats for best finish. Stir well before use.'
  },
  {
    id: 'wood',
    name: 'Plywood Sheets',
    description: 'Waterproof plywood for furniture and doors.',
    priceRange: '$40 - $60 / sheet',
    image: 'https://media.istockphoto.com/id/485719974/photo/eucalyptus-trees.jpg?s=612x612&w=0&k=20&c=JOSLmTWJ7_c1fN753m4HHM6sPeX9WWXvDKOL4cP9yfc=',
    gallery: [
      'https://5.imimg.com/data5/SELLER/Default/2021/12/HW/KG/SQ/143354869/syp-wood-timber-plank.jpg',
      'https://www.shutterstock.com/image-photo/perspective-angle-wooden-planks-closeup-260nw-2110133330.jpg',
      'https://static.vecteezy.com/system/resources/thumbnails/028/560/461/small/a-brown-wood-texture-serves-as-an-abstract-background-photo.jpg',
    ],
    category: 'Carpentry',
    unit: 'sheet',
    specifications: [
      'Type: BWP Grade',
      'Size: 8x4 ft',
      'Thickness: 18 mm'
    ],
    suppliers: [
      { id: 'w1', name: 'Century Ply', logo: 'https://picsum.photos/seed/century/80', pricePerUnit: '$50 / sheet', deliveryTime: '3 days', rating: 4.7 }
    ],
    contactInfo: {
      phone: '+1 (222) 444-5555',
      email: 'info@centuryply.com',
      address: 'Wood Plaza, NY',
      website: 'https://centuryply.com'
    },
    ratings: 4.6,
    availability: 'In Stock',
    technicalSpecs: { grade: 'BWP', thickness: '18 mm', density: '700 kg/m³' },
    usageTips: 'Seal edges before use in humid areas.'
  },
  {
    id: 'pipes',
    name: 'PVC Pipes',
    description: 'High-pressure PVC pipes for water supply and drainage.',
    priceRange: '$2 - $5 / meter',
    image: 'https://picsum.photos/seed/pipes-main/600/400',
    gallery: [
      'https://picsum.photos/seed/pipe1/600/400',
      'https://picsum.photos/seed/pipe2/600/400'
    ],
    category: 'Plumbing',
    unit: 'meter',
    specifications: [
      'Material: PVC',
      'Diameter: 20mm - 110mm',
      'Pressure Rating: 10 bar'
    ],
    suppliers: [
      { id: 'pi1', name: 'Supreme Industries', logo: 'https://picsum.photos/seed/supreme/80', pricePerUnit: '$3 / meter', deliveryTime: '2 days', rating: 4.6 }
    ],
    contactInfo: {
      phone: '+1 (666) 777-8888',
      email: 'sales@supreme.co',
      address: 'Pipe Zone, NY',
      website: 'https://supreme.co'
    },
    ratings: 4.5,
    availability: 'In Stock',
    technicalSpecs: { pressure: '10 bar', diameterRange: '20mm–110mm' },
    usageTips: 'Use solvent cement for leak-proof joints.'
  },
   {
    id: 'metal sheets',
    name: 'Galvanized Metal Sheets',
    description: 'Zinc-coated steel sheets for roofing, siding, and industrial use.',
    priceRange: '$50 - $80 / sheet',
    image: 'https://picsum.photos/seed/metal-main/600/400',
    gallery: [
      'https://picsum.photos/seed/metal1/600/400',
      'https://picsum.photos/seed/metal2/600/400'
    ],
    category: 'Metals',
    unit: 'sheet',
    specifications: [
      'Material: Galvanized Steel',
      'Thickness: 0.4mm - 1.2mm',
      'Coating: Zinc Layer',
      'Usage: Roofing, Wall Panels'
    ],
    suppliers: [
      { id: 'm1', name: 'Tata Metal Form', logo: 'https://picsum.photos/seed/tatametal/80', pricePerUnit: '$70 / sheet', deliveryTime: '3 days', rating: 4.8 }
    ],
    contactInfo: {
      phone: '+1 (900) 111-2222',
      email: 'sales@tatametal.com',
      address: 'Tata Industrial Zone, NJ',
      website: 'https://tatametal.com'
    },
    ratings: 4.8,
    availability: 'In Stock',
    technicalSpecs: { coating: 'Zinc', thickness: '0.8mm', strength: '320 MPa' },
    usageTips: 'Apply anti-rust primer for outdoor installation.'
  },

  {
    id: 'fiberglass panels',
    name: 'Fiberglass Panels',
    description: 'Lightweight, durable panels made from reinforced glass fiber.',
    priceRange: '$30 - $45 / sheet',
    image: 'https://picsum.photos/seed/fiberglass-main/600/400',
    gallery: [
      'https://picsum.photos/seed/fiber1/600/400',
      'https://picsum.photos/seed/fiber2/600/400'
    ],
    category: 'Composites',
    unit: 'sheet',
    specifications: [
      'Material: Glass Fiber Reinforced Plastic (GFRP)',
      'Thickness: 5mm - 12mm',
      'Usage: Roofing, Partitions, Skylights'
    ],
    suppliers: [
      { id: 'fg1', name: 'FiberTech Pvt Ltd', logo: 'https://picsum.photos/seed/fibertech/80', pricePerUnit: '$40 / sheet', deliveryTime: '4 days', rating: 4.6 }
    ],
    contactInfo: {
      phone: '+1 (333) 123-2222',
      email: 'info@fibertech.com',
      address: 'Tech Park, Los Angeles, CA',
      website: 'https://fibertech.com'
    },
    ratings: 4.5,
    availability: 'Limited Stock',
    technicalSpecs: { density: '1.9 g/cm³', strength: '240 MPa', insulation: 'High' },
    usageTips: 'Use UV-resistant coating for outdoor exposure.'
  },

  {
    id: 'aluminium section',
    name: 'Aluminium Sections',
    description: 'High-strength aluminum profiles for windows, doors, and frames.',
    priceRange: '$8 - $15 / kg',
    image: 'https://picsum.photos/seed/aluminium-main/600/400',
    gallery: [
      'https://picsum.photos/seed/aluminium1/600/400',
      'https://picsum.photos/seed/aluminium2/600/400'
    ],
    category: 'Metals',
    unit: 'kg',
    specifications: [
      'Alloy: 6063-T6',
      'Finish: Anodized / Powder Coated',
      'Usage: Windows, Doors, Partitions'
    ],
    suppliers: [
      { id: 'a1', name: 'Hindalco Metals', logo: 'https://picsum.photos/seed/hindalco/80', pricePerUnit: '$12 / kg', deliveryTime: '2 days', rating: 4.7 }
    ],
    contactInfo: {
      phone: '+1 (707) 888-9000',
      email: 'sales@hindalco.com',
      address: 'Metal Park, Mumbai',
      website: 'https://hindalco.com'
    },
    ratings: 4.6,
    availability: 'In Stock',
    technicalSpecs: { alloy: '6063-T6', density: '2.7 g/cm³', yieldStrength: '240 MPa' },
    usageTips: 'Use rubber beading during installation for airtight sealing.'
  },

  {
    id: 'copper electrical wire',
    name: 'Copper Electrical Wire',
    description: 'PVC insulated copper wire for residential electrical systems.',
    priceRange: '$1.5 - $3 / meter',
    image: 'https://picsum.photos/seed/wire-main/600/400',
    gallery: [
      'https://picsum.photos/seed/wire1/600/400',
      'https://picsum.photos/seed/wire2/600/400'
    ],
    category: 'Electrical',
    unit: 'meter',
    specifications: [
      'Conductor: 99.9% Pure Copper',
      'Insulation: PVC / FRLS',
      'Voltage: 1100V'
    ],
    suppliers: [
      { id: 'e1', name: 'Polycab Wires', logo: 'https://picsum.photos/seed/polycab/80', pricePerUnit: '$2 / meter', deliveryTime: '2 days', rating: 4.9 }
    ],
    contactInfo: {
      phone: '+1 (222) 111-3333',
      email: 'info@polycab.com',
      address: 'Electrical Street, NY',
      website: 'https://polycab.com'
    },
    ratings: 4.9,
    availability: 'In Stock',
    technicalSpecs: { conductor: 'Copper', insulation: 'PVC FRLS', maxTemp: '70°C' },
    usageTips: 'Avoid bending wires sharply to prevent insulation damage.'
  },

  {
    id: 'modular switch set',
    name: 'Modular Switch Set',
    description: 'Elegant modular switches with shockproof design.',
    priceRange: '$2 - $8 / piece',
    image: 'https://picsum.photos/seed/switches-main/600/400',
    gallery: [
      'https://picsum.photos/seed/switch1/600/400',
      'https://picsum.photos/seed/switch2/600/400'
    ],
    category: 'Electrical',
    unit: 'piece',
    specifications: [
      'Voltage: 240V',
      'Material: Fire-retardant Polycarbonate',
      'Style: Modular Plates'
    ],
    suppliers: [
      { id: 'sw1', name: 'Havells India', logo: 'https://picsum.photos/seed/havells/80', pricePerUnit: '$5 / piece', deliveryTime: '2 days', rating: 4.7 }
    ],
    contactInfo: {
      phone: '+1 (999) 888-7777',
      email: 'support@havells.com',
      address: 'Electric Plaza, Delhi',
      website: 'https://havells.com'
    },
    ratings: 4.8,
    availability: 'In Stock',
    technicalSpecs: { voltage: '240V', material: 'Polycarbonate', lifespan: '100k operations' },
    usageTips: 'Ensure proper earthing before connection.'
  },

  {
    id: 'solar panel kit',
    name: 'Solar Panel Kit',
    description: 'Monocrystalline solar panels for home and office setups.',
    priceRange: '$200 - $400 / panel',
    image: 'https://picsum.photos/seed/solar-main/600/400',
    gallery: [
      'https://picsum.photos/seed/solar1/600/400',
      'https://picsum.photos/seed/solar2/600/400'
    ],
    category: 'Electronics',
    unit: 'panel',
    specifications: [
      'Capacity: 450W',
      'Efficiency: 21%',
      'Lifespan: 25 years'
    ],
    suppliers: [
      { id: 'sp1', name: 'Loom Solar', logo: 'https://picsum.photos/seed/loom/80', pricePerUnit: '$350 / panel', deliveryTime: '5 days', rating: 4.9 }
    ],
    contactInfo: {
      phone: '+1 (800) 555-1234',
      email: 'sales@loomsolar.com',
      address: 'Energy Park, Texas',
      website: 'https://loomsolar.com'
    },
    ratings: 4.9,
    availability: 'In Stock',
    technicalSpecs: { type: 'Monocrystalline', capacity: '450W', efficiency: '21%' },
    usageTips: 'Install panels facing south for maximum sunlight exposure.'
  },

  {
    id: 'led ceiling lights',
    name: 'LED Ceiling Lights',
    description: 'Energy-efficient LED panels for indoor lighting.',
    priceRange: '$15 - $30 / unit',
    image: 'https://picsum.photos/seed/led-main/600/400',
    gallery: [
      'https://picsum.photos/seed/led1/600/400',
      'https://picsum.photos/seed/led2/600/400'
    ],
    category: 'Electronics',
    unit: 'unit',
    specifications: [
      'Power: 18W / 24W',
      'Color Temperature: 6500K',
      'Lifespan: 50,000 hours'
    ],
    suppliers: [
      { id: 'l1', name: 'Philips Lighting', logo: 'https://picsum.photos/seed/philips/80', pricePerUnit: '$20 / unit', deliveryTime: '2 days', rating: 4.8 }
    ],
    contactInfo: {
      phone: '+1 (888) 555-8888',
      email: 'info@philips.com',
      address: 'Light Plaza, NY',
      website: 'https://philips.com'
    },
    ratings: 4.9,
    availability: 'In Stock',
    technicalSpecs: { wattage: '18W', lumens: '1800 lm', voltage: '230V' },
    usageTips: 'Use with surge protectors to extend life.'
  },

  {
    id: 'smart home control kit',
    name: 'Smart Home Control Kit',
    description: 'WiFi-enabled kit for controlling lights, fans, and appliances.',
    priceRange: '$150 - $250 / kit',
    image: 'https://picsum.photos/seed/smarthome-main/600/400',
    gallery: [
      'https://picsum.photos/seed/smarthome1/600/400',
      'https://picsum.photos/seed/smarthome2/600/400'
    ],
    category: 'Electronics',
    unit: 'kit',
    specifications: [
      'Connectivity: WiFi / Alexa / Google Home',
      'Control: App + Voice',
      'Compatibility: All Brands'
    ],
    suppliers: [
      { id: 'sh1', name: 'Smartify Systems', logo: 'https://picsum.photos/seed/smartify/80', pricePerUnit: '$200 / kit', deliveryTime: '5 days', rating: 4.6 }
    ],
    contactInfo: {
      phone: '+1 (100) 222-6666',
      email: 'help@smartify.com',
      address: 'IoT Avenue, SF',
      website: 'https://smartify.com'
    },
    ratings: 4.7,
    availability: 'In Stock',
    technicalSpecs: { connectivity: 'WiFi', voltageRange: '90–250V', appControl: 'Yes' },
    usageTips: 'Connect via 2.4GHz WiFi network for better stability.'
  }
];
