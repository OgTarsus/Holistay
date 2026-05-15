export const COUNTRY_DATA = [
  { name: 'Morocco', cities: ['Marrakech', 'Casablanca', 'Chefchaouen'] },
  { name: 'South Africa', cities: ['Cape Town', 'Johannesburg', 'Knysna', 'Durban'] },
  { name: 'Tanzania', cities: ['Zanzibar', 'Arusha', 'Serengeti'] },
  { name: 'Kenya', cities: ['Nairobi', 'Diani Beach', 'Maasai Mara'] },
  { name: 'Egypt', cities: ['Cairo', 'Luxor', 'Sharm El Sheikh'] },
  { name: 'Senegal', cities: ['Dakar', 'Saint-Louis'] },
  { name: 'Ghana', cities: ['Accra', 'Kumasi'] },
  { name: 'Nigeria', cities: ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan'] },
  { name: 'Uganda', cities: ['Kampala', 'Entebbe'] }
];

export const ALL_CITIES = COUNTRY_DATA.reduce((acc, country) => {
  return [...acc, ...country.cities.map(city => ({ name: city, country: country.name }))];
}, []).sort((a, b) => a.name.localeCompare(b.name));

export const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Atlas Mountain Glass Villa',
    description: 'Perched on the edge of the High Atlas, this architectural marvel offers total glass walls overlooking the valley. Experience the rugged beauty of Morocco from a space that blends Berber tradition with modern luxury, featuring a private heated infinity pool and custom-carved stone interiors.',
    location: 'Marrakech, Morocco',
    price: 650,
    rating: 4.98,
    reviewsCount: 156,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687931-ceeb66d11262?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'House',
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Free Parking', 'AC', 'Tv'],
    host: {
      name: 'Amine',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      isSuperhost: true,
    },
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    tags: ['Luxury', 'Mountain View'],
  },
  {
    id: '2',
    title: 'Cape Atlantic Dream',
    description: 'This sleek, multi-level residence captures the essence of Cape Town luxury. Nestled between the Twelve Apostles and the Atlantic, the home features floor-to-ceiling windows and a minimalist design that lets the ocean take center stage. Every detail has been curated for the ultimate coastal lifestyle.',
    location: 'Cape Town, South Africa',
    price: 890,
    rating: 4.95,
    reviewsCount: 92,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'House',
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Free Parking', 'AC'],
    host: {
      name: 'Sarah',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      isSuperhost: true,
    },
    guests: 8,
    bedrooms: 4,
    beds: 4,
    bathrooms: 4,
    tags: ['Coastal', 'Luxury'],
  },
  {
    id: '3',
    title: 'Serengeti Horizon Lodge',
    description: 'A private sanctuary in the heart of the wild, this eco-luxury lodge offers an intimate connection with nature. Watch the great migration from your private deck or relax in a suite that uses sustainable materials and local craftsmanship to create a space that is both grounding and world-class.',
    location: 'Serengeti, Tanzania',
    price: 1200,
    rating: 5.0,
    reviewsCount: 48,
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Cabin',
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Pet services'],
    host: {
      name: 'Kojo',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
      isSuperhost: true,
    },
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    tags: ['Safari', 'Eco-Luxury'],
  },
  {
    id: '4',
    title: 'Zanzibar White Sands Loft',
    description: 'Steps away from the turquoise waters of Paje Beach, this modern loft combines Swahili architecture with contemporary comfort. The open-plan design maximizes the ocean breeze, while the private roof terrace provides the perfect vantage point for Zanzibar sunsets.',
    location: 'Zanzibar, Tanzania',
    price: 450,
    rating: 4.89,
    reviewsCount: 215,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'Apartment',
    amenities: ['WiFi', 'Kitchen', 'AC'],
    host: {
      name: 'Lulu',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
      isSuperhost: false,
    },
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    tags: ['Beachfront', 'Design'],
  },
  {
    id: '5',
    title: 'Accra Contemporary Estate',
    description: 'Experience West African luxury in this sprawling contemporary estate. Featuring a private art gallery, professional chef service, and a tropical garden oasis, this property is a masterclass in modern living in the vibrant heart of Ghana.',
    location: 'Accra, Ghana',
    price: 520,
    rating: 4.82,
    reviewsCount: 134,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687931-ceeb66d11262?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    type: 'House',
    amenities: ['Pool', 'WiFi', 'Kitchen', 'Free Parking', 'AC', 'Pet services'],
    host: {
      name: 'Adwoa',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      isSuperhost: true,
    },
    guests: 10,
    bedrooms: 5,
    beds: 6,
    bathrooms: 5,
    tags: ['Luxury', 'Tropical'],
  }
];

export const ALL_PROPERTY_TYPES = Array.from(new Set(MOCK_LISTINGS.map(l => l.type)));
export const ALL_AMENITIES = Array.from(new Set(MOCK_LISTINGS.flatMap(l => l.amenities)));

