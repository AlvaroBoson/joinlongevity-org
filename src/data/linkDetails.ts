export interface LinkDetail {
  id: string;
  source: string;
  target: string;
  type: string;
  date?: string;
  amount?: string;
  description: string;
  direction: 'bidirectional' | 'source-to-target' | 'target-to-source';
}

export const linkDetails: Record<string, LinkDetail> = {
  // Investment/Funding relationships
  'Hevolution->Buck Institute': {
    id: 'hevolution-buck',
    source: 'Hevolution',
    target: 'Buck Institute',
    type: 'Investment',
    date: 'March 2022',
    amount: '$50M',
    description: 'Hevolution Foundation invested $50M in Buck Institute to advance aging research and therapeutic development.',
    direction: 'source-to-target'
  },
  
  'Hevolution->VitaDAO': {
    id: 'hevolution-vitadao',
    source: 'Hevolution',
    target: 'VitaDAO',
    type: 'Investment',
    date: 'September 2022',
    amount: '$4.1M',
    description: 'Hevolution participated in VitaDAO\'s funding round to support decentralized longevity research.',
    direction: 'source-to-target'
  },
  
  'Vitalik Buterin->SENS Research Foundation': {
    id: 'vitalik-sens',
    source: 'Vitalik Buterin',
    target: 'SENS Research Foundation',
    type: 'Donation',
    date: 'May 2021',
    amount: '$2.4M',
    description: 'Vitalik Buterin donated $2.4M in cryptocurrency to SENS Research Foundation for aging research.',
    direction: 'source-to-target'
  },
  
  'Vitalik Buterin->VitaDAO': {
    id: 'vitalik-vitadao',
    source: 'Vitalik Buterin',
    target: 'VitaDAO',
    type: 'Advisory',
    date: 'July 2021',
    description: 'Vitalik Buterin became an advisor to VitaDAO, supporting their decentralized longevity research mission.',
    direction: 'source-to-target'
  },

  // Leadership relationships
  'Aubrey de Grey->SENS Research Foundation': {
    id: 'aubrey-sens',
    source: 'Aubrey de Grey',
    target: 'SENS Research Foundation',
    type: 'Founder',
    date: '2009',
    description: 'Aubrey de Grey co-founded SENS Research Foundation to develop rejuvenation biotechnologies.',
    direction: 'source-to-target'
  },
  
  'Aubrey de Grey->LEV Foundation': {
    id: 'aubrey-lev',
    source: 'Aubrey de Grey',
    target: 'LEV Foundation',
    type: 'Founder',
    date: '2022',
    description: 'Aubrey de Grey founded LEV Foundation after leaving SENS to continue longevity research.',
    direction: 'source-to-target'
  },
  
  'David Sinclair->Harvard Medical School': {
    id: 'sinclair-harvard',
    source: 'David Sinclair',
    target: 'Harvard Medical School',
    type: 'Professor',
    date: '1999',
    description: 'David Sinclair is a Professor of Genetics at Harvard Medical School, leading aging research.',
    direction: 'source-to-target'
  },

  // Partnership relationships
  'David Sinclair->ARDD 2025': {
    id: 'sinclair-ardd',
    source: 'David Sinclair',
    target: 'ARDD 2025',
    type: 'Speaker',
    date: '2024',
    description: 'David Sinclair is a keynote speaker at ARDD 2025 conference on aging research.',
    direction: 'bidirectional'
  },
  
  'Aubrey de Grey->ARDD 2025': {
    id: 'aubrey-ardd',
    source: 'Aubrey de Grey',
    target: 'ARDD 2025',
    type: 'Advisory Board',
    date: '2023',
    description: 'Aubrey de Grey serves on the advisory board for ARDD conference series.',
    direction: 'bidirectional'
  },
  
  'LEV Foundation->TransVision': {
    id: 'lev-transvision',
    source: 'LEV Foundation',
    target: 'TransVision',
    type: 'Multi-year Partnership',
    date: '2023-2025',
    description: 'LEV Foundation has been a key partner of TransVision conference series since 2023, with renewed partnerships for 2024 and 2025 to advance longevity research and education.',
    direction: 'bidirectional'
  },
  
  'Vitalism->Longevity Biotech Fellowship': {
    id: 'vitalism-lbf',
    source: 'Vitalism',
    target: 'Longevity Biotech Fellowship',
    type: 'Strategic Alliance',
    date: '2022-ongoing',
    description: 'Vitalism and LBF formed a strategic alliance in 2022 that has evolved into deeper collaboration, with joint events, shared resources, and coordinated member support through 2025.',
    direction: 'bidirectional'
  },

  // Conference sponsorships (sample)
  'VitaDAO->ARDD 2025': {
    id: 'vitadao-ardd',
    source: 'VitaDAO',
    target: 'ARDD 2025',
    type: 'Recurring Sponsorship',
    date: '2023-2025',
    amount: '$75K total',
    description: 'VitaDAO has been a Gold sponsor of ARDD conference series since 2023, with increasing sponsorship commitments through 2025 ($25K annually).',
    direction: 'source-to-target'
  },
  
  'Altos Labs->RAAD Festival': {
    id: 'altos-raad',
    source: 'Altos Labs',
    target: 'RAAD Festival',
    type: 'Sponsorship',
    date: '2023',
    description: 'Altos Labs sponsors RAAD Festival to showcase cellular reprogramming research.',
    direction: 'source-to-target'
  },

  // LBF Leadership
  'Mark Hamalainen->Longevity Biotech Fellowship': {
    id: 'mark-lbf',
    source: 'Mark Hamalainen',
    target: 'Longevity Biotech Fellowship',
    type: 'Co-Founder',
    date: '2021',
    description: 'Mark Hamalainen co-founded the Longevity Biotech Fellowship to support longevity entrepreneurs.',
    direction: 'source-to-target'
  },
  
  'Nathan Cheng->Longevity Biotech Fellowship': {
    id: 'nathan-lbf',
    source: 'Nathan Cheng',
    target: 'Longevity Biotech Fellowship',
    type: 'Co-Founder',
    date: '2021',
    description: 'Nathan Cheng co-founded LBF and leads the community of longevity builders and investors.',
    direction: 'source-to-target'
  },

  // --- NEW LSD CONNECTIONS ---
  'Kennedy Schaal->Rejuve.Bio': {
    id: 'kennedy-rejuve',
    source: 'Kennedy Schaal',
    target: 'Rejuve.Bio',
    type: 'CEO',
    date: '2018',
    description: 'Kennedy Schaal is the CEO of Rejuve.Bio, leading their decentralized longevity research platform.',
    direction: 'source-to-target'
  },

  'Keith Comito->Lifespan.io': {
    id: 'keith-lifespan',
    source: 'Keith Comito',
    target: 'Lifespan.io',
    type: 'CEO',
    date: '2014',
    description: 'Keith Comito founded and leads Lifespan.io, pioneering crowdfunded longevity research.',
    direction: 'source-to-target'
  },

  'Michael Ringel->Life Biosciences': {
    id: 'michael-life',
    source: 'Michael Ringel',
    target: 'Life Biosciences',
    type: 'COO',
    date: '2017',
    description: 'Michael Ringel serves as COO of Life Biosciences, overseeing their longevity therapeutics portfolio.',
    direction: 'source-to-target'
  },

  'Rejuve.Bio->Longevity Summit Dublin': {
    id: 'rejuve-lsd',
    source: 'Rejuve.Bio',
    target: 'Longevity Summit Dublin',
    type: 'Gold Sponsorship',
    date: '2024',
    amount: '€15K',
    description: 'Rejuve.Bio sponsors Longevity Summit Dublin as a Gold sponsor, showcasing their AI-driven longevity research platform.',
    direction: 'source-to-target'
  },

  'LEV Foundation->Longevity Summit Dublin': {
    id: 'lev-lsd',
    source: 'LEV Foundation',
    target: 'Longevity Summit Dublin',
    type: 'Strategic Partnership',
    date: '2024-2025',
    description: 'LEV Foundation partners with Longevity Summit Dublin to advance European longevity research initiatives.',
    direction: 'bidirectional'
  },

  'Lifespan.io->Longevity Summit Dublin': {
    id: 'lifespan-lsd',
    source: 'Lifespan.io',
    target: 'Longevity Summit Dublin',
    type: 'Media Partnership',
    date: '2024',
    description: 'Lifespan.io serves as official media partner for Longevity Summit Dublin, providing coverage and community outreach.',
    direction: 'bidirectional'
  },

  // --- ARDD LEADERSHIP DETAILS ---
  'Morten Scheibye-Knudsen->ARDD 2025': {
    id: 'morten-ardd',
    source: 'Morten Scheibye-Knudsen',
    target: 'ARDD 2025',
    type: 'Founder & Main Organizer',
    date: '2016',
    description: 'Morten Scheibye-Knudsen founded ARDD conference series in 2016 and serves as the main organizer, building it into the premier aging research conference.',
    direction: 'source-to-target'
  },

  'Alex Zhavoronkov->ARDD 2025': {
    id: 'alex-ardd',
    source: 'Alex Zhavoronkov',
    target: 'ARDD 2025',
    type: 'Strategic Partner',
    date: '2016-ongoing',
    amount: '$500K+ total',
    description: 'Alex Zhavoronkov has been a key strategic partner of ARDD since its inception, with Insilico Medicine providing major sponsorship annually.',
    direction: 'bidirectional'
  },

  'Alex Zhavoronkov->Insilico Medicine': {
    id: 'alex-insilico',
    source: 'Alex Zhavoronkov',
    target: 'Insilico Medicine',
    type: 'CEO & Founder',
    date: '2014',
    description: 'Alex Zhavoronkov founded Insilico Medicine in 2014, pioneering AI-driven drug discovery for aging and longevity.',
    direction: 'source-to-target'
  },

  'Daniela Janina Bakula->ARDD 2025': {
    id: 'daniela-ardd',
    source: 'Daniela Janina Bakula',
    target: 'ARDD 2025',
    type: 'Co-Organizer',
    date: '2018-ongoing',
    description: 'Daniela Janina Bakula serves as co-organizer of ARDD, working closely with Morten to manage the conference operations.',
    direction: 'source-to-target'
  },

  'Maximilian Unfried->The Thalion Initiative': {
    id: 'max-thalion',
    source: 'Maximilian Unfried',
    target: 'The Thalion Initiative',
    type: 'Leadership Team',
    date: '2023',
    description: 'Maximilian Unfried is part of The Thalion Initiative leadership team, advancing global longevity research coordination.',
    direction: 'source-to-target'
  }
};

// Helper function to get link detail by source and target
export const getLinkDetail = (source: string, target: string): LinkDetail | null => {
  // Try direct match
  const directKey = `${source}->${target}`;
  if (linkDetails[directKey]) {
    return linkDetails[directKey];
  }
  
  // Try reverse match
  const reverseKey = `${target}->${source}`;
  if (linkDetails[reverseKey]) {
    return linkDetails[reverseKey];
  }
  
  return null;
};
