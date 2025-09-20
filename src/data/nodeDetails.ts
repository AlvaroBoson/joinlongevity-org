export interface NodeDetail {
  fullName: string;
  description: string;
  website?: string;
  type: string;
}

export const nodeDetails: Record<string, NodeDetail> = {
  'ARDD 2025': {
    fullName: 'Aging Research and Drug Discovery Conference 2025',
    description: 'Premier international conference focused on aging research and drug discovery for longevity.',
    website: 'http://agingpharma.org',
    type: 'Conference'
  },

  'Longevity Biotech Fellowship': {
    fullName: 'Longevity Biotech Fellowship',
    description: 'Elite community for builders and investors in longevity biotech. Highly selective, focused on high-impact ventures.',
    website: 'https://www.longbiofellowship.org',
    type: 'Community'
  },
  
  'The Thalion Initiative': {
    fullName: 'The Thalion Initiative',
    description: 'Global initiative advancing longevity research and therapeutic development.',
    website: 'https://www.thalion.global/team',
    type: 'Organization'
  },

  
  // --- LSD SPONSORS ---
  'Rejuve.Bio': {
    fullName: 'Rejuve.Bio',
    description: 'Decentralized network using AI and blockchain to advance longevity research.',
    website: 'https://www.rejuve.bio',
    type: 'Organization'
  },
  
  'Accelerated Biosciences': {
    fullName: 'Accelerated Biosciences',
    description: 'Biotechnology company accelerating longevity therapeutics development.',
    website: 'https://www.acceleratedbio.com',
    type: 'Organization'
  },
  
  'Lifespan Research Institute': {
    fullName: 'Lifespan Research Institute',
    description: 'Research institute focused on extending healthy human lifespan.',
    website: 'https://www.lifespan.io/joining-forces-a-shared-mission/',
    type: 'Organization'
  },
  
  'TripleHelix': {
    fullName: 'TripleHelix Science',
    description: 'Scientific consulting and research company in longevity biotechnology.',
    website: 'https://www.triplehelixscience.com',
    type: 'Organization'
  },
  
  'ALIS': {
    fullName: 'ALIS Health AI',
    description: 'AI-powered health analytics platform for longevity and wellness.',
    website: 'https://www.alishealth.ai',
    type: 'Organization'
  },
  
  'REAC Technology': {
    fullName: 'REAC Technology',
    description: 'Biomedical technology company developing regenerative therapies.',
    website: 'https://reactechnology.com',
    type: 'Organization'
  },
  
  // --- LSD SUPPORTERS ---
  'bloodo': {
    fullName: 'bloodo',
    description: 'Digital health platform for blood analysis and personalized health insights.',
    website: 'https://bloodo.com',
    type: 'Organization'
  },
  
  'ETH Dublin': {
    fullName: 'ETH Dublin',
    description: 'Ethereum blockchain community and development hub in Dublin.',
    website: 'https://www.ethdublin.io/',
    type: 'Organization'
  },
  
  'Aeon Foundation': {
    fullName: 'Aeon Foundation',
    description: 'Foundation supporting longevity research and life extension initiatives.',
    website: 'https://www.aeonfoundation.eu/',
    type: 'Organization'
  },
  
  'NU': {
    fullName: 'NU',
    description: 'Health and wellness technology company.',
    website: 'https://www.thenu.com/',
    type: 'Organization'
  },
  
  'Thermo Human': {
    fullName: 'Thermo Human',
    description: 'Thermal therapy and wellness technology company.',
    website: 'https://thermohuman.com/',
    type: 'Organization'
  },
  
  'HEALES': {
    fullName: 'Healthy Life Extension Society',
    description: 'Non-profit organization promoting healthy life extension research and advocacy.',
    website: 'https://heales.org/',
    type: 'Organization'
  },
  
  'GBR Medical': {
    fullName: 'GBR Medical',
    description: 'Medical technology company specializing in regenerative medicine.',
    website: 'https://gbrmedical.com/',
    type: 'Organization'
  },
  
  'OPATRA London': {
    fullName: 'OPATRA London',
    description: 'Luxury wellness and beauty technology company.',
    website: 'https://opatra.com/',
    type: 'Organization'
  },
  
  'nouxx': {
    fullName: 'nouxx',
    description: 'Innovative wellness and longevity solutions company.',
    website: 'https://nouxx.com/en',
    type: 'Organization'
  },
  
  'Omega3 Smoothies': {
    fullName: 'Omega3 Smoothies',
    description: 'Health-focused smoothie company with omega-3 enhanced products.',
    website: 'https://o3smoothies.com/',
    type: 'Organization'
  },
  
  'TOBI Studio': {
    fullName: 'TOBI Studio',
    description: 'Creative design studio specializing in health and wellness branding.',
    website: 'https://www.tobitobistudio.com/',
    type: 'Organization'
  },
  
  'Pens': {
    fullName: 'Pens',
    description: 'Premium writing instruments and corporate solutions company.',
    website: 'https://www.pens.com/us/',
    type: 'Organization'
  },
  
  // --- MEDIA PARTNERS ---
  'Longevity Technology': {
    fullName: 'Longevity Technology',
    description: 'Leading media platform covering longevity science, technology, and business.',
    website: 'https://longevity.technology/',
    type: 'Organization'
  },
  
  'Lifespan.io': {
    fullName: 'Lifespan.io',
    description: 'Crowdfunding platform and media outlet supporting longevity research.',
    website: 'https://www.lifespan.io/',
    type: 'Organization'
  },
  
  'Wellness Forum': {
    fullName: 'Wellness Forum',
    description: 'Professional wellness industry forum and networking platform.',
    website: 'https://wellnessforum.pro/',
    type: 'Organization'
  },
  
  'Media Planet': {
    fullName: 'Media Planet',
    description: 'Digital media platform focusing on health and wellness content.',
    website: 'https://www.ninasnotes.xyz/',
    type: 'Organization'
  },
  
  'Global Brain Health Institute': {
    fullName: 'Global Brain Health Institute',
    description: 'International research institute focused on brain health and dementia prevention.',
    website: 'https://www.gbhi.org/',
    type: 'Organization'
  },
  
  'Europe Active': {
    fullName: 'Europe Active',
    description: 'European association promoting physical activity and health.',
    website: 'https://www.europeactive.eu/',
    type: 'Organization'
  },
  
  'Sound to Light': {
    fullName: 'Sound to Light',
    description: 'Wellness and therapeutic sound technology company.',
    website: 'https://soundtolight.ie/',
    type: 'Organization'
  },
  
  // --- ARDD LEADERSHIP TEAM ---
  'Morten Scheibye-Knudsen': {
    fullName: 'Morten Scheibye-Knudsen',
    description: 'Main organizer and founder of ARDD conference, leading aging researcher at University of Copenhagen.',
    type: 'Person'
  },
  
  'Daniela Janina Bakula': {
    fullName: 'Daniela Janina Bakula',
    description: 'Co-organizer of ARDD conference and aging researcher, right-hand to Morten Scheibye-Knudsen.',
    type: 'Person'
  },
  
  'Alex Zhavoronkov': {
    fullName: 'Alex Zhavoronkov',
    description: 'CEO of Insilico Medicine, key ARDD partner and major sponsor, AI-driven drug discovery pioneer.',
    type: 'Person'
  },
  
  'Evelyne Yehudit Bischof': {
    fullName: 'Evelyne Yehudit Bischof',
    description: 'ARDD leadership team member and longevity researcher.',
    type: 'Person'
  },
  
  'Stephanie Tsang': {
    fullName: 'Stephanie Tsang',
    description: 'Insilico Medicine employee and ARDD main team member.',
    type: 'Person'
  },
  
  'Wen-Huei Chen': {
    fullName: 'Wen-Huei Chen',
    description: 'Part of Morten Scheibye-Knudsen\'s lab and ARDD main organizing team.',
    type: 'Person'
  },
  
  // --- SPEAKERS ---
  'Maximilian Unfried': {
    fullName: 'Maximilian Unfried',
    description: 'Longevity researcher at Singapore university, speaker at major conferences, leadership at The Thalion Initiative.',
    type: 'Person'
  },
  
  'Jan Gruber': {
    fullName: 'Jan Gruber',
    description: 'Professor at National University of Singapore, aging and longevity researcher.',
    type: 'Person'
  },
  
  'Michael Ringel': {
    fullName: 'Michael Ringel',
    description: 'COO of Life Biosciences, executive in longevity biotechnology.',
    type: 'Person'
  },
  
  'Kennedy Schaal': {
    fullName: 'Kennedy Schaal',
    description: 'CEO of Rejuve.Bio, leader in decentralized longevity research.',
    type: 'Person'
  },
  
  'Keith Comito': {
    fullName: 'Keith Comito',
    description: 'CEO of Lifespan.io, advocate for longevity research crowdfunding.',
    type: 'Person'
  },
  
  'Jose Luis Cordeiro': {
    fullName: 'Jose Luis Cordeiro',
    description: 'Futurist, transhumanist, and longevity advocate, founder of TransVision.',
    type: 'Person'
  }
};
