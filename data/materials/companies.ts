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

    // 🪨 Floor Tiles
  {
    id: 'c_b1',
    name: 'TileWorld Industries',
    logo: 'https://static.wixstatic.com/media/e9822b_61b3bfe353d0480598b5a98d2f307836~mv2.jpg',
    location: 'Kochi',
    website: 'https://tileworld.example',
    rating: 4.4,
    materialsSupplied: ['tiles'],
  },
  {
    id: 'c_b2',
    name: 'FloorX Ceramics',
    logo: 'https://www.ceramictilesinfo.com/wp-content/uploads/2021/10/Florex-Ceramic-Tiles-Morbi.webp',
    location: 'Ahmedabad',
    website: 'https://floorx.example',
    rating: 4.6,
    materialsSupplied: ['tiles'],
  },
  {
    id: 'c_b3',
    name: 'RoyalTile Pvt Ltd',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbeNnwSQwcsjdWpC_xanTomLsOl1rVN-L-Q&s',
    location: 'Bangalore',
    website: 'https://royaltile.example',
    rating: 4.5,
    materialsSupplied: ['tiles'],
  },

  // 🎨 Interior Paint
  {
    id: 'c_c1',
    name: 'ColorMax Paints',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CJgPHzHKyEnNyn4ny3AP5L7fLKnPdhLjEGZhRSRRXcXqIgVY6po0Eyo2XCU2D9iwJuc&usqp=CAU',
    location: 'Pune',
    website: 'https://colormax.example',
    rating: 4.7,
    materialsSupplied: ['paint'],
  },
  {
    id: 'c_c2',
    name: 'PureShade Coats',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bBz6fk14adB2WhZjMFDWLJnTUIGqw8_MvWrizJYYJw-5n5ACvzZsYtx3Wea_waWug1E&usqp=CAU',
    location: 'Hyderabad',
    website: 'https://pureshade.example',
    rating: 4.5,
    materialsSupplied: ['paint'],
  },
  {
    id: 'c_c3',
    name: 'BrightWall Finishes',
    logo: 'https://brightdrywall.ca/wp-content/uploads/2025/02/WhatsApp_Image_2025-04-03_at_3.20.06_PM-removebg-preview.png',
    location: 'Jaipur',
    website: 'https://brightwall.example',
    rating: 4.6,
    materialsSupplied: ['paint'],
  },

  // 🪵 Plywood Sheets
  {
    id: 'c_d1',
    name: 'PlyPro Sheets Co.',
    logo: 'https://d2cdki9wzwrm1b.cloudfront.net/userfiles/brands/pro-ply-logo.png',
    location: 'Bangalore',
    website: 'https://plypro.example',
    rating: 4.5,
    materialsSupplied: ['wood'],
  },
  {
    id: 'c_d2',
    name: 'WoodCraft Ply',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/008/075/489/small/wood-industries-company-logo-with-the-concept-of-saws-and-carpentry-and-classic-and-modern-style-vector.jpg',
    location: 'Delhi',
    website: 'https://woodcraft.example',
    rating: 4.6,
    materialsSupplied: ['wood'],
  },
  {
    id: 'c_d3',
    name: 'GreenEdge Panels',
    logo: 'https://greenedgeltd.com/wp-content/uploads/2023/05/NEW-GREENEDGE-1024x576.png',
    location: 'Kolkata',
    website: 'https://greenedge.example',
    rating: 4.4,
    materialsSupplied: ['wood'],
  },

  // 🧵 PVC Pipes
  {
    id: 'c_e1',
    name: 'FlowLine Pipes',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlDQk-KsYxXk_EdR7dXYv19hdmMhViXanXkAa_x3id6xvMiUss4Yo_LtnUH9AFhfYEEU&usqp=CAU',
    location: 'Chennai',
    website: 'https://flowline.example',
    rating: 4.3,
    materialsSupplied: ['pipes'],
  },
  {
    id: 'c_e2',
    name: 'AquaFlow Industries',
    logo: 'https://cdn.produkto.io/logo-templates/66deb8736ecddb857bb8c6b5/aqua-flow.webp',
    location: 'Surat',
    website: 'https://aquaflow.example',
    rating: 4.5,
    materialsSupplied: ['pipes'],
  },
  {
    id: 'c_e3',
    name: 'PipePro Solutions',
    logo: 'https://cam-university.com/wp-content/uploads/sites/29/2024/12/Pipeflow-Solutions-logo-jpg.jpg',
    location: 'Nagpur',
    website: 'https://pipepro.example',
    rating: 4.4,
    materialsSupplied: ['pipes'],
  },

  // 🧲 Galvanized Metal Sheets
  {
    id: 'c_f1',
    name: 'MetalGuard Roofing',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-a7yGGQb3s4tF5OD6yhT0l_nL3QuSWrxaFA&s',
    location: 'Delhi',
    website: 'https://metalguard.example',
    rating: 4.8,
    materialsSupplied: ['metal sheets'],
  },
  {
    id: 'c_f2',
    name: 'SteelWave Metals',
    logo: 'https://cdn.theorg.com/34a3ed48-ead1-4435-ad8c-e1bdea210858_thumb.jpg',
    location: 'Pune',
    website: 'https://steelwave.example',
    rating: 4.7,
    materialsSupplied: ['metal sheets'],
  },
  {
    id: 'c_f3',
    name: 'IronShield Sheets',
    logo: 'https://www.montlakeucits.com/wp-content/uploads/2023/01/Ironshield-High-Yield-Alpha-Fund.png',
    location: 'Hyderabad',
    website: 'https://ironshield.example',
    rating: 4.6,
    materialsSupplied: ['metal sheets'],
  },

  // 🪟 Fiberglass Panels
  {
    id: 'c_g1',
    name: 'FiberTech Panels',
    logo: 'https://d2ffe4c0hazokn.cloudfront.net/media/amasty/shopby/option_images/Fibertech_1.png',
    location: 'Kolkata',
    website: 'https://fibertech.example',
    rating: 4.5,
    materialsSupplied: ['fiberglass panels'],
  },
  {
    id: 'c_g2',
    name: 'GlassFlex Composites',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8mqYS4KQi_h-2VUG31_8xu8eO0lB9GpWGw&s',
    location: 'Surat',
    website: 'https://glassflex.example',
    rating: 4.4,
    materialsSupplied: ['fiberglass panels'],
  },
  {
    id: 'c_g3',
    name: 'FiberMate Co.',
    logo: 'https://i.pinimg.com/736x/b0/20/4c/b0204c3c65caa7be29be398989632159.jpg',
    location: 'Mumbai',
    website: 'https://fibermate.example',
    rating: 4.6,
    materialsSupplied: ['fiberglass panels'],
  },

  // 🧱 Aluminium Section
  {
    id: 'c_h1',
    name: 'AluForm Sections',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/lplghfw1vcuwf1srfxja',
    location: 'Surat',
    website: 'https://aluform.example',
    rating: 4.6,
    materialsSupplied: ['aluminium section'],
  },
  {
    id: 'c_h2',
    name: 'MetalLite Structures',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmQLaX2DU4-anQ0_YCASkp2XIblSqLaRk6Q&s',
    location: 'Bangalore',
    website: 'https://metallite.example',
    rating: 4.5,
    materialsSupplied: ['aluminium section'],
  },
  {
    id: 'c_h3',
    name: 'AlloyEdge Industries',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFnBhU3aRK9KA/company-logo_200_200/company-logo_200_200/0/1645027097881/alloy_mechanical_inc_logo?e=2147483647&v=beta&t=nqtozCDXbbWuS8SRmOhvF7ddcZcG7Y367glPI8jR2E0',
    location: 'Hyderabad',
    website: 'https://alloyedge.example',
    rating: 4.7,
    materialsSupplied: ['aluminium section'],
  },

  // ⚡ Copper Electrical Wire
  {
    id: 'c_i1',
    name: 'CopperLine Wires',
    logo: 'https://tint.creativemarket.com/ISWSaVTtEKtgL1-OVs0o0dO_CdZ6dm2mNd-j31uSzTo/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzEyNDMvMTI0MzcvMTI0MzcwNzUvY29wcGVyX3dpcmVfbG9nby0wMS1vLnBuZw?1653366681',
    location: 'Jaipur',
    website: 'https://copperline.example',
    rating: 4.4,
    materialsSupplied: ['copper electrical wire'],
  },
  {
    id: 'mix1',
    name: 'BuildPro Suppliers',
    logo: 'https://play-lh.googleusercontent.com/nWtWwhmihZDUtKnYSTR3FI4q4g2SyhfnJJSIauAntMDaWKsub0aq7ghuiBu1cIUmcYMTL-s4JtEzt_FIECy1',
    location: 'Delhi',
    website: 'https://wiremax.example',
    rating: 4.6,
    materialsSupplied: ['copper electrical wire'],
  },
  {
    id: 'c_i3',
    name: 'VoltPro Conductors',
    logo: 'https://i0.wp.com/voltproelectricians.com/wp-content/uploads/2024/02/cropped-beautifully-delicious-sans-5.png?fit=925%2C925&ssl=1',
    location: 'Chennai',
    website: 'https://voltpro.example',
    rating: 4.5,
    materialsSupplied: ['copper electrical wire'],
  },

  // 🔌 Modular Switch Set
  {
    id: 'mix2',
    name: 'AllMaterials Hub',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIxNLMhJ0d5CBsJds6FrI4pdiXHTWDZ9NMUw&s',
    location: 'Ahmedabad',
    website: 'https://switchsmart.example',
    rating: 4.7,
    materialsSupplied: ['modular switch set'],
  },
  {
    id: 'c_j2',
    name: 'ElecFlex Switches',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIu0tX77F0I0s4kDMlYkFmJxRViIjX4ww6BA&s',
    location: 'Mumbai',
    website: 'https://elecflex.example',
    rating: 4.6,
    materialsSupplied: ['modular switch set'],
  },
  {
    id: 'c_j3',
    name: 'NovaSwitch Tech',
    logo: 'https://img.freepik.com/premium-vector/novatech-solutions-logo-design_867537-8.jpg',
    location: 'Kolkata',
    website: 'https://novaswitch.example',
    rating: 4.5,
    materialsSupplied: ['modular switch set'],
  },

  // ☀️ Solar Panel Kit
  {
    id: 'c_k1',
    name: 'SunVolt Solar Systems',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbDT1Ncg0dwMkZCPExrxvsp9e0lMW2GKKDQ&s',
    location: 'Trivandrum',
    website: 'https://sunvolt.example',
    rating: 4.9,
    materialsSupplied: ['solar panel kit'],
  },
  {
    id: 'c_k2',
    name: 'BrightSun Energy',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyLBltv9TasteRgPi1sNuubaID3VEq1PdcA&s',
    location: 'Noida',
    website: 'https://brightsun.example',
    rating: 4.7,
    materialsSupplied: ['solar panel kit'],
  },
  {
    id: 'c_k3',
    name: 'EcoRay PowerTech',
    logo: 'https://play-lh.googleusercontent.com/8Ykux3Z0QKIWX2F0iItpgsNusU_thstcZSZq8fgltNy0xd7dUrvlS3B4j2nOfFEUw18kRRw7S1J_su_OX5HEgg',
    location: 'Hyderabad',
    website: 'https://ecoray.example',
    rating: 4.8,
    materialsSupplied: ['solar panel kit'],
  },

  // 💡 LED Ceiling Lights
  {
    id: 'c_l1',
    name: 'GlowLite LED Works',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo1qmYklRsBZcgXDRmfdrifsmAiquozXfZA&s',
    location: 'Nagpur',
    website: 'https://glowlite.example',
    rating: 4.6,
    materialsSupplied: ['led ceiling lights'],
  },
  {
    id: 'c_l2',
    name: 'BrightBeam Lighting',
    logo: 'https://cdn.vectorstock.com/i/1000v/56/03/bright-light-logo-vector-43715603.jpg',
    location: 'Kochi',
    website: 'https://brightbeam.example',
    rating: 4.7,
    materialsSupplied: ['led ceiling lights'],
  },
  {
    id: 'c_l3',
    name: 'LumiCore Technologies',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSft1noNGYdu2AR0jNeS-flQFzXVoVqci5JVg&s',
    location: 'Delhi',
    website: 'https://lumicore.example',
    rating: 4.8,
    materialsSupplied: ['led ceiling lights'],
  },

  // 🏠 Smart Home Control Kit
  {
    id: 'c_m1',
    name: 'Smartify Home Controls',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVik_7UGb-N2nOGAJH-7kF46v-0dLJqkO-Q&s',
    location: 'Noida',
    website: 'https://smartify.example',
    rating: 4.8,
    materialsSupplied: ['smart home control kit'],
  },
  {
    id: 'c_m2',
    name: 'Domotics Hub Pvt Ltd',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKCMA3En7CibCClyZC4BpA1LeyQpdsowo76g&s',
    location: 'Pune',
    website: 'https://domotics.example',
    rating: 4.7,
    materialsSupplied: ['smart home control kit'],
  },
  {
    id: 'c_m3',
    name: 'HomeIQ Systems',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-h41OWjDu5oW9ZKhFgwYRFndyiXhO433dbQ&s',
    location: 'Chennai',
    website: 'https://homeiq.example',
    rating: 4.9,
    materialsSupplied: ['smart home control kit'],
  },
];
